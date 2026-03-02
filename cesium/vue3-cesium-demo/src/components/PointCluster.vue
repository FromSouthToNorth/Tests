<template>
  <div class="control-panel">
    <h3>📍 Point 聚合</h3>
    
    <div class="control-group">
      <p class="description">将大量点数据聚合显示，提高性能并清晰展示数据分布。</p>
    </div>

    <div class="control-group">
      <label>数据数量: <span class="value">{{ pointCount }}</span></label>
      <input 
        type="range" 
        v-model.number="pointCount" 
        min="100" 
        max="10000" 
        step="100"
      />
    </div>

    <div class="control-group">
      <label>聚合距离: <span class="value">{{ pixelRange }}px</span></label>
      <input 
        type="range" 
        v-model.number="pixelRange" 
        min="10" 
        max="100" 
        step="5"
        @input="updateCluster"
      />
    </div>

    <div class="control-group">
      <label>最小聚合数量: <span class="value">{{ minimumClusterSize }}</span></label>
      <input 
        type="range" 
        v-model.number="minimumClusterSize" 
        min="2" 
        max="20" 
        step="1"
        @input="updateCluster"
      />
    </div>

    <div class="control-group">
      <label class="checkbox-label">
        <input type="checkbox" v-model="showLabels" @change="updateCluster" />
        显示聚合标签
      </label>
    </div>

    <div class="control-group">
      <label>点样式:</label>
      <select v-model="pointStyle" @change="regeneratePoints">
        <option value="circle">圆形</option>
        <option value="pin">图钉</option>
        <option value="flag">旗帜</option>
      </select>
    </div>

    <div class="button-group">
      <button class="primary" @click="generatePoints">生成随机点</button>
      <button @click="clearPoints">清除所有</button>
    </div>

    <div class="stats-box" v-if="stats.total > 0">
      <h4>📊 统计信息</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-value">{{ stats.total }}</span>
          <span class="stat-label">总点数</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.clusters }}</span>
          <span class="stat-label">聚合数</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ stats.singles }}</span>
          <span class="stat-label">单点数</span>
        </div>
      </div>
    </div>

    <div class="info-box">
      <h4>💡 功能说明</h4>
      <ul>
        <li>自动生成随机分布的点数据</li>
        <li>根据距离自动聚合临近点</li>
        <li>点击聚合查看包含的点</li>
        <li>缩放地图自动调整聚合</li>
      </ul>
    </div>

    <div v-if="status" class="status" :class="status.type">{{ status.message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as Cesium from 'cesium'

const props = defineProps({
  viewer: {
    type: Object,
    default: null
  }
})

// 状态
const pointCount = ref(1000)
const pixelRange = ref(50)
const minimumClusterSize = ref(3)
const showLabels = ref(true)
const pointStyle = ref('circle')
const status = ref(null)
const stats = ref({ total: 0, clusters: 0, singles: 0 })

// Cesium 相关
let dataSource = null
let handler = null

// 生成随机点数据
const generatePoints = async () => {
  if (!props.viewer) {
    status.value = { type: 'error', message: 'Cesium 未初始化' }
    return
  }

  clearPoints()
  status.value = { type: 'info', message: '正在生成点数据...' }

  try {
    // 创建自定义数据源
    dataSource = new Cesium.CustomDataSource('points')
    
    // 在中国区域生成随机点
    const centerLon = 116.4
    const centerLat = 39.9
    const spread = 5 // 分布范围（度）
    
    const entities = []
    
    for (let i = 0; i < pointCount.value; i++) {
      // 生成正态分布的随机坐标
      const u = Math.random()
      const v = Math.random()
      const radius = Math.sqrt(-2 * Math.log(u)) * 0.5
      const theta = 2 * Math.PI * v
      
      const lon = centerLon + radius * Math.cos(theta) * spread
      const lat = centerLat + radius * Math.sin(theta) * spread
      
      // 随机高度
      const height = Math.random() * 5000
      
      // 创建点实体
      const entity = dataSource.entities.add({
        position: Cesium.Cartesian3.fromDegrees(lon, lat, height),
        id: `point_${i}`,
        name: `点 ${i + 1}`,
        properties: {
          index: i,
          value: Math.floor(Math.random() * 100),
          category: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]
        },
        // 点图形
        point: {
          pixelSize: 15,
          color: getColorByValue(Math.random()),
          outlineColor: Cesium.Color.WHITE,
          outlineWidth: 2,
          scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),
          translucencyByDistance: new Cesium.NearFarScalar(1.5e5, 1.0, 1.5e7, 0.5)
        },
        //  Billboard 样式（当选择非圆形时）
        billboard: pointStyle.value !== 'circle' ? {
          image: createPinImage(getColorByValue(Math.random())),
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          scale: 0.5,
          scaleByDistance: new Cesium.NearFarScalar(1.5e2, 1.5, 1.5e7, 0.3)
        } : undefined
      })
      
      entities.push(entity)
    }
    
    // 添加数据源到 viewer
    await props.viewer.dataSources.add(dataSource)
    
    // 启用聚合
    setupClustering()
    
    // 更新统计
    updateStats()
    
    // 飞到数据区域
    props.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, 800000),
      orientation: {
        heading: 0,
        pitch: -0.5,
        roll: 0
      }
    })
    
    status.value = { type: 'success', message: `成功生成 ${pointCount.value} 个点` }
  } catch (error) {
    console.error('生成点失败:', error)
    status.value = { type: 'error', message: '生成点失败: ' + error.message }
  }
}

// 根据值获取颜色
const getColorByValue = (value) => {
  if (value < 0.25) return Cesium.Color.fromCssColorString('#4CAF50') // 绿
  if (value < 0.5) return Cesium.Color.fromCssColorString('#2196F3')  // 蓝
  if (value < 0.75) return Cesium.Color.fromCssColorString('#FF9800') // 橙
  return Cesium.Color.fromCssColorString('#f44336') // 红
}

// 创建图钉图片
const createPinImage = (color) => {
  const canvas = document.createElement('canvas')
  canvas.width = 40
  canvas.height = 40
  const ctx = canvas.getContext('2d')
  
  // 绘制图钉
  ctx.beginPath()
  ctx.arc(20, 15, 12, 0, Math.PI * 2)
  ctx.fillStyle = color.toCssColorString()
  ctx.fill()
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 2
  ctx.stroke()
  
  // 绘制尖端
  ctx.beginPath()
  ctx.moveTo(20, 27)
  ctx.lineTo(14, 38)
  ctx.lineTo(26, 38)
  ctx.closePath()
  ctx.fillStyle = color.toCssColorString()
  ctx.fill()
  
  return canvas.toDataURL()
}

// 设置聚合
const setupClustering = () => {
  if (!dataSource) return
  
  dataSource.clustering.enabled = true
  dataSource.clustering.pixelRange = pixelRange.value
  dataSource.clustering.minimumClusterSize = minimumClusterSize.value
  
  // 自定义聚合样式
  dataSource.clustering.clusterEvent.addEventListener((clusteredEntities, cluster) => {
    cluster.label.show = showLabels.value
    cluster.label.text = clusteredEntities.length.toString()
    cluster.label.font = 'bold 16px Microsoft YaHei'
    cluster.label.fillColor = Cesium.Color.WHITE
    cluster.label.outlineColor = Cesium.Color.BLACK
    cluster.label.outlineWidth = 2
    cluster.label.style = Cesium.LabelStyle.FILL_AND_OUTLINE
    cluster.label.verticalOrigin = Cesium.VerticalOrigin.CENTER
    cluster.label.pixelOffset = new Cesium.Cartesian2(0, -5)
    
    // 根据聚合数量设置颜色
    const count = clusteredEntities.length
    let color
    if (count < 10) {
      color = Cesium.Color.fromCssColorString('#4CAF50')
    } else if (count < 50) {
      color = Cesium.Color.fromCssColorString('#2196F3')
    } else if (count < 100) {
      color = Cesium.Color.fromCssColorString('#FF9800')
    } else {
      color = Cesium.Color.fromCssColorString('#f44336')
    }
    
    // 设置点样式
    if (cluster.point) {
      cluster.point.pixelSize = Math.min(50, 20 + count / 5)
      cluster.point.color = color
      cluster.point.outlineColor = Cesium.Color.WHITE
      cluster.point.outlineWidth = 3
    }
    
    // 如果是 billboard 模式
    if (cluster.billboard) {
      cluster.billboard.image = createClusterPinImage(count, color)
      cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM
      cluster.billboard.scale = Math.min(1.5, 0.5 + count / 100)
    }
  })
  
  // 点击事件
  setupClickHandler()
}

// 创建聚合图钉
const createClusterPinImage = (count, color) => {
  const canvas = document.createElement('canvas')
  canvas.width = 60
  canvas.height = 60
  const ctx = canvas.getContext('2d')
  
  const size = Math.min(50, 25 + count / 5)
  
  // 绘制圆形背景
  ctx.beginPath()
  ctx.arc(30, 25, size / 2, 0, Math.PI * 2)
  ctx.fillStyle = color.toCssColorString()
  ctx.fill()
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 3
  ctx.stroke()
  
  // 绘制文字
  ctx.fillStyle = '#fff'
  ctx.font = 'bold 14px Microsoft YaHei'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(count > 999 ? '999+' : count.toString(), 30, 25)
  
  // 绘制尖端
  ctx.beginPath()
  ctx.moveTo(30, 25 + size / 2)
  ctx.lineTo(22, 55)
  ctx.lineTo(38, 55)
  ctx.closePath()
  ctx.fillStyle = color.toCssColorString()
  ctx.fill()
  
  return canvas.toDataURL()
}

// 设置点击处理器
const setupClickHandler = () => {
  if (handler) {
    handler.destroy()
  }
  
  handler = new Cesium.ScreenSpaceEventHandler(props.viewer.canvas)
  
  handler.setInputAction((click) => {
    const pickedObject = props.viewer.scene.pick(click.position)
    
    if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id)) {
      const entity = pickedObject.id
      
      // 检查是否是聚合
      if (entity.cluster && entity.cluster._clusteredEntities) {
        const clusteredEntities = entity.cluster._clusteredEntities
        showClusterInfo(clusteredEntities, click.position)
      } else {
        // 单个点
        showPointInfo(entity)
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
}

// 显示聚合信息
const showClusterInfo = (entities, position) => {
  const count = entities.length
  const avgHeight = entities.reduce((sum, e) => {
    const cartographic = Cesium.Cartographic.fromCartesian(e.position.getValue())
    return sum + cartographic.height
  }, 0) / count
  
  // 创建信息框
  const info = `
    <div style="padding: 10px;">
      <h4 style="margin: 0 0 10px 0; color: #4CAF50;">聚合信息</h4>
      <p>包含点数: <strong>${count}</strong></p>
      <p>平均高度: <strong>${avgHeight.toFixed(0)}m</strong></p>
      <p style="font-size: 12px; color: #aaa; margin-top: 10px;">点击聚合可查看详情</p>
    </div>
  `
  
  props.viewer.selectedEntity = undefined
}

// 显示单点信息
const showPointInfo = (entity) => {
  const props = entity.properties
  const cartographic = Cesium.Cartographic.fromCartesian(entity.position.getValue())
  
  // 更新实体描述
  entity.description = `
    <div style="padding: 10px;">
      <h4 style="margin: 0 0 10px 0; color: #2196F3;">${entity.name}</h4>
      <table style="width: 100%; font-size: 13px;">
        <tr><td>索引:</td><td><strong>${props.index.getValue()}</strong></td></tr>
        <tr><td>数值:</td><td><strong>${props.value.getValue()}</strong></td></tr>
        <tr><td>类别:</td><td><strong>${props.category.getValue()}</strong></td></tr>
        <tr><td>经度:</td><td><strong>${Cesium.Math.toDegrees(cartographic.longitude).toFixed(4)}°</strong></td></tr>
        <tr><td>纬度:</td><td><strong>${Cesium.Math.toDegrees(cartographic.latitude).toFixed(4)}°</strong></td></tr>
        <tr><td>高度:</td><td><strong>${cartographic.height.toFixed(0)}m</strong></td></tr>
      </table>
    </div>
  `
}

// 更新聚合参数
const updateCluster = () => {
  if (dataSource && dataSource.clustering) {
    dataSource.clustering.pixelRange = pixelRange.value
    dataSource.clustering.minimumClusterSize = minimumClusterSize.value
    
    // 强制刷新
    dataSource.clustering.enabled = false
    dataSource.clustering.enabled = true
    
    updateStats()
  }
}

// 更新统计
const updateStats = () => {
  if (!dataSource) return
  
  const entities = dataSource.entities.values
  stats.value.total = entities.length
  
  // 获取当前聚合状态
  setTimeout(() => {
    try {
      // 简单的统计估算
      const range = pixelRange.value
      const minSize = minimumClusterSize.value
      
      // 这里使用简化算法估算
      let clusterCount = 0
      let singleCount = 0
      
      // 实际聚合数量需要通过 Cesium 内部获取，这里简化处理
      singleCount = Math.floor(entities.length / (range / 10 + 1))
      clusterCount = Math.floor(singleCount / minSize)
      singleCount = singleCount - clusterCount * minSize
      
      stats.value.clusters = clusterCount
      stats.value.singles = Math.max(0, entities.length - clusterCount * minSize)
    } catch (e) {
      stats.value.clusters = 0
      stats.value.singles = entities.length
    }
  }, 100)
}

// 重新生成点
const regeneratePoints = () => {
  if (dataSource) {
    generatePoints()
  }
}

// 清除所有点
const clearPoints = () => {
  if (dataSource) {
    props.viewer.dataSources.remove(dataSource)
    dataSource = null
  }
  
  if (handler) {
    handler.destroy()
    handler = null
  }
  
  stats.value = { total: 0, clusters: 0, singles: 0 }
  status.value = { type: 'info', message: '已清除所有点' }
}

onMounted(() => {
  status.value = { type: 'info', message: '点击"生成随机点"开始演示' }
})

onUnmounted(() => {
  clearPoints()
})
</script>

<style scoped>
.control-panel {
  width: 320px;
  max-height: 80vh;
  overflow-y: auto;
}

.description {
  color: #aaa;
  font-size: 13px;
  line-height: 1.5;
}

.value {
  color: #4CAF50;
  font-weight: bold;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.button-group {
  display: flex;
  gap: 8px;
}

.button-group button {
  flex: 1;
}

.stats-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 5px;
  margin-top: 15px;
}

.stats-box h4 {
  margin: 0 0 12px 0;
  color: #4CAF50;
  font-size: 13px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.stat-item {
  text-align: center;
  padding: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.stat-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #4CAF50;
}

.stat-label {
  display: block;
  font-size: 11px;
  color: #aaa;
  margin-top: 4px;
}

.info-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 5px;
  margin-top: 15px;
}

.info-box h4 {
  margin: 0 0 8px 0;
  color: #2196F3;
  font-size: 13px;
}

.info-box ul {
  margin: 0;
  padding-left: 18px;
  font-size: 12px;
  color: #ccc;
  line-height: 1.8;
}

.status {
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
}

.status.success {
  background: rgba(76, 175, 80, 0.3);
  color: #4CAF50;
}

.status.error {
  background: rgba(244, 67, 54, 0.3);
  color: #f44336;
}

.status.info {
  background: rgba(33, 150, 243, 0.3);
  color: #2196F3;
}
</style>
