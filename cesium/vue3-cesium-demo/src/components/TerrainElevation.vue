<template>
  <div class="control-panel">
    <h3>⛰️ 地形抬升</h3>
    
    <div class="control-group">
      <p class="description">模拟地形抬升/沉降效果，在地形表面创建可视化抬升体。</p>
      <p class="description" style="color: #4CAF50; margin-top: 5px;">✓ 相对于地形表面定位 ✓ 自动采样地形高度</p>
    </div>

    <div class="control-group">
      <label>抬升区域形状:</label>
      <div class="button-group">
        <button 
          :class="{ active: elevationType === 'rectangle' }"
          @click="elevationType = 'rectangle'"
        >
          矩形
        </button>
        <button 
          :class="{ active: elevationType === 'circle' }"
          @click="elevationType = 'circle'"
        >
          圆形
        </button>
      </div>
    </div>

    <div class="control-group">
      <label>操作模式:</label>
      <div class="button-group">
        <button 
          :class="{ active: mode === 'raise', 'mode-raise': true }"
          @click="mode = 'raise'"
        >
          抬升 ⬆️
        </button>
        <button 
          :class="{ active: mode === 'lower', 'mode-lower': true }"
          @click="mode = 'lower'"
        >
          沉降 ⬇️
        </button>
      </div>
    </div>

    <div class="control-group">
      <label>影响范围: <span class="value">{{ radius }}m</span></label>
      <input 
        type="range" 
        v-model.number="radius" 
        min="100" 
        max="2000" 
        step="50"
        @input="updatePreview"
      />
    </div>

    <div class="control-group">
      <label>抬升/沉降高度: <span class="value">{{ height }}m</span></label>
      <input 
        type="range" 
        v-model.number="height" 
        min="10" 
        max="500" 
        step="10"
      />
    </div>

    <div class="control-group">
      <label>过渡坡度: <span class="value">{{ slope }}%</span></label>
      <input 
        type="range" 
        v-model.number="slope" 
        min="10" 
        max="80" 
        step="5"
        @input="updatePreview"
      />
    </div>

    <div class="control-group">
      <label class="checkbox-label">
        <input type="checkbox" v-model="showWireframe" @change="toggleWireframe" />
        显示线框
      </label>
    </div>

    <div class="control-group">
      <label>线框颜色:</label>
      <input type="color" v-model="wireframeColor" @input="updatePreview" />
    </div>

    <div class="button-group">
      <button class="primary" @click="applyElevation">
        {{ mode === 'raise' ? '执行抬升' : '执行沉降' }}
      </button>
      <button @click="clearElevation">清除效果</button>
    </div>

    <div class="control-group">
      <button class="secondary" @click="playAnimation">
        ▶️ 播放动画演示
      </button>
    </div>

    <div class="info-box">
      <h4>📍 操作说明</h4>
      <ol>
        <li>选择抬升或沉降模式</li>
        <li>调整影响范围和高度</li>
        <li>点击"执行"后在地图上点击位置</li>
        <li>或播放动画查看动态效果</li>
      </ol>
    </div>

    <div v-if="status" class="status" :class="status.type">{{ status.message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as Cesium from 'cesium'

const props = defineProps({
  viewer: {
    type: Object,
    default: null
  }
})

// 状态
const elevationType = ref('rectangle')
const mode = ref('raise')
const radius = ref(500)
const height = ref(100)
const slope = ref(30)
const showWireframe = ref(true)
const wireframeColor = ref('#FF9800')
const status = ref(null)

// Cesium 相关
let elevationEntities = []
let terrainProvider = null
let originalTerrain = null
let handler = null
let animationInterval = null

// 更新预览
const updatePreview = () => {
  // 实时更新预览效果
  if (elevationEntities.length > 0) {
    applyElevationEffect(false)
  }
}

// 应用抬升/沉降
const applyElevation = () => {
  if (!props.viewer) {
    status.value = { type: 'error', message: 'Cesium 未初始化' }
    return
  }

  clearElevation()
  
  status.value = { type: 'info', message: '请在地图上点击选择位置...' }
  
  // 添加点击事件
  handler = new Cesium.ScreenSpaceEventHandler(props.viewer.canvas)
  
  handler.setInputAction(async (click) => {
    const cartesian = props.viewer.camera.pickEllipsoid(click.position, props.viewer.scene.globe.ellipsoid)
    
    if (cartesian) {
      const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
      const longitude = Cesium.Math.toDegrees(cartographic.longitude)
      const latitude = Cesium.Math.toDegrees(cartographic.latitude)
      
      await createElevationAtPosition(longitude, latitude)
      
      if (handler) {
        handler.destroy()
        handler = null
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
}

// 在指定位置创建抬升效果
const createElevationAtPosition = async (longitude, latitude) => {
  if (!props.viewer) return
  
  const r = radius.value
  const h = mode.value === 'raise' ? height.value : -height.value
  const color = mode.value === 'raise' 
    ? Cesium.Color.fromCssColorString('#4CAF50').withAlpha(0.6)
    : Cesium.Color.fromCssColorString('#f44336').withAlpha(0.6)
  
  // 获取地形高度
  const terrainProvider = props.viewer.scene.globe.terrainProvider
  const positions = [Cesium.Cartographic.fromDegrees(longitude, latitude)]
  const updatedPositions = await Cesium.sampleTerrainMostDetailed(terrainProvider, positions)
  const terrainHeight = updatedPositions[0].height || 0
  
  status.value = { type: 'info', message: `地形高度: ${terrainHeight.toFixed(0)}m, 抬升: ${h}m` }
  
  // 创建渐变效果的多层结构
  const layers = 5
  
  for (let i = 0; i < layers; i++) {
    const ratio = i / (layers - 1)
    const layerRadius = r * (1 - ratio * 0.6)
    const layerHeight = h * (1 - ratio * 0.7)
    const layerAlpha = 0.7 - ratio * 0.4
    
    if (elevationType.value === 'rectangle') {
      // 矩形层 - 使用相对地形高度
      const halfSize = layerRadius / 111320
      const entity = props.viewer.entities.add({
        rectangle: {
          coordinates: Cesium.Rectangle.fromDegrees(
            longitude - halfSize,
            latitude - halfSize,
            longitude + halfSize,
            latitude + halfSize
          ),
          height: layerHeight,
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          extrudedHeight: 0,
          extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          fill: true,
          material: mode.value === 'raise' 
            ? Cesium.Color.fromCssColorString('#4CAF50').withAlpha(layerAlpha)
            : Cesium.Color.fromCssColorString('#f44336').withAlpha(layerAlpha),
          outline: showWireframe.value && i === 0,
          outlineColor: Cesium.Color.fromCssColorString(wireframeColor.value),
          outlineWidth: 2
        }
      })
      elevationEntities.push(entity)
    } else {
      // 圆形层 - 使用相对地形高度
      const entity = props.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
        ellipse: {
          semiMajorAxis: layerRadius,
          semiMinorAxis: layerRadius,
          height: layerHeight,
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          extrudedHeight: 0,
          extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
          fill: true,
          material: mode.value === 'raise' 
            ? Cesium.Color.fromCssColorString('#4CAF50').withAlpha(layerAlpha)
            : Cesium.Color.fromCssColorString('#f44336').withAlpha(layerAlpha),
          outline: showWireframe.value && i === 0,
          outlineColor: Cesium.Color.fromCssColorString(wireframeColor.value),
          outlineWidth: 2
        }
      })
      elevationEntities.push(entity)
    }
  }
  
  // 创建剖面线效果 - 使用采样地形高度
  createProfileLinesWithTerrainSampling(longitude, latitude, h)
  
  // 创建高度标记 - 使用相对地形高度
  createHeightMarkersWithTerrain(longitude, latitude, h)
  
  status.value = { 
    type: 'success', 
    message: `已在 [${longitude.toFixed(4)}, ${latitude.toFixed(4)}] ${mode.value === 'raise' ? '抬升' : '沉降'} ${Math.abs(h)}m` 
  }
  
  // 飞到这个位置
  props.viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, Math.max(r * 3, 2000)),
    orientation: {
      heading: 0,
      pitch: -0.6,
      roll: 0
    }
  })
}

// 创建剖面线 - 采样地形高度
const createProfileLinesWithTerrainSampling = async (longitude, latitude, h) => {
  const r = radius.value
  const lineColor = Cesium.Color.fromCssColorString(wireframeColor.value)
  
  // 获取地形高度
  const terrainProvider = props.viewer.scene.globe.terrainProvider
  const positions = [
    Cesium.Cartographic.fromDegrees(longitude - r / 111320, latitude),
    Cesium.Cartographic.fromDegrees(longitude + r / 111320, latitude),
    Cesium.Cartographic.fromDegrees(longitude, latitude - r / 111320),
    Cesium.Cartographic.fromDegrees(longitude, latitude + r / 111320),
    Cesium.Cartographic.fromDegrees(longitude, latitude)
  ]
  
  const updatedPositions = await Cesium.sampleTerrainMostDetailed(terrainProvider, positions)
  const terrainHeight = updatedPositions[4].height || 0
  
  // 东西方向剖面线
  const eastHeight = updatedPositions[0].height || 0
  const westHeight = updatedPositions[1].height || 0
  
  elevationEntities.push(props.viewer.entities.add({
    polyline: {
      positions: [
        Cesium.Cartesian3.fromDegrees(longitude - r / 111320, latitude, eastHeight),
        Cesium.Cartesian3.fromDegrees(longitude - r / 111320, latitude, eastHeight + h),
        Cesium.Cartesian3.fromDegrees(longitude + r / 111320, latitude, westHeight + h),
        Cesium.Cartesian3.fromDegrees(longitude + r / 111320, latitude, westHeight)
      ],
      width: 3,
      material: new Cesium.PolylineDashMaterialProperty({
        color: lineColor,
        dashLength: 10
      })
    }
  }))
  
  // 南北方向剖面线
  const southHeight = updatedPositions[2].height || 0
  const northHeight = updatedPositions[3].height || 0
  
  elevationEntities.push(props.viewer.entities.add({
    polyline: {
      positions: [
        Cesium.Cartesian3.fromDegrees(longitude, latitude - r / 111320, southHeight),
        Cesium.Cartesian3.fromDegrees(longitude, latitude - r / 111320, southHeight + h),
        Cesium.Cartesian3.fromDegrees(longitude, latitude + r / 111320, northHeight + h),
        Cesium.Cartesian3.fromDegrees(longitude, latitude + r / 111320, northHeight)
      ],
      width: 3,
      material: new Cesium.PolylineDashMaterialProperty({
        color: lineColor,
        dashLength: 10
      })
    }
  }))
  
  // 创建垂直连接线（中心）
  elevationEntities.push(props.viewer.entities.add({
    polyline: {
      positions: [
        Cesium.Cartesian3.fromDegrees(longitude, latitude, terrainHeight),
        Cesium.Cartesian3.fromDegrees(longitude, latitude, terrainHeight + h)
      ],
      width: 4,
      material: mode.value === 'raise' ? Cesium.Color.GREEN : Cesium.Color.RED
    }
  }))
}

// 创建高度标记 - 使用相对地形高度
const createHeightMarkersWithTerrain = async (longitude, latitude, h) => {
  const r = radius.value
  
  // 获取中心点地形高度
  const terrainProvider = props.viewer.scene.globe.terrainProvider
  const centerPosition = [Cesium.Cartographic.fromDegrees(longitude, latitude)]
  const updatedPositions = await Cesium.sampleTerrainMostDetailed(terrainProvider, centerPosition)
  const terrainHeight = updatedPositions[0].height || 0
  
  // 中心点标记 - 在地形高度 + 抬升高度的位置
  elevationEntities.push(props.viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude, terrainHeight + h),
    point: {
      pixelSize: 15,
      color: mode.value === 'raise' ? Cesium.Color.GREEN : Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2,
      heightReference: Cesium.HeightReference.NONE
    },
    label: {
      text: `${h > 0 ? '+' : ''}${h.toFixed(0)}m`,
      font: 'bold 14px Microsoft YaHei',
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 2,
      pixelOffset: new Cesium.Cartesian2(0, -25),
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      heightReference: Cesium.HeightReference.NONE
    }
  }))
  
  // 原始地形高度标记
  elevationEntities.push(props.viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude, terrainHeight),
    point: {
      pixelSize: 10,
      color: Cesium.Color.BLUE,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 2
    },
    label: {
      text: `地面`,
      font: '12px Microsoft YaHei',
      fillColor: Cesium.Color.WHITE,
      pixelOffset: new Cesium.Cartesian2(0, -20),
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  }))
}

// 应用抬升效果（内部使用）
const applyElevationEffect = (animate = false) => {
  // 重新应用当前设置
  if (elevationEntities.length > 0) {
    clearElevation()
    // 这里可以重新生成
  }
}

// 切换线框显示
const toggleWireframe = () => {
  elevationEntities.forEach(entity => {
    if (entity.rectangle) {
      entity.rectangle.outline = showWireframe.value
    }
    if (entity.ellipse) {
      entity.ellipse.outline = showWireframe.value
    }
  })
}

// 播放动画
const playAnimation = () => {
  if (!props.viewer) return
  
  clearElevation()
  status.value = { type: 'info', message: '播放动画演示中...' }
  
  const centerLon = 116.4
  const centerLat = 39.9
  const r = 800
  
  // 飞到初始位置
  props.viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, 5000),
    orientation: {
      heading: 0,
      pitch: -0.8,
      roll: 0
    },
    complete: () => {
      let step = 0
      const maxSteps = 50
      
      animationInterval = setInterval(() => {
        if (step >= maxSteps) {
          clearInterval(animationInterval)
          status.value = { type: 'success', message: '动画演示完成' }
          return
        }
        
        // 清除之前的帧
        elevationEntities.forEach(e => props.viewer.entities.remove(e))
        elevationEntities = []
        
        const progress = step / maxSteps
        const currentHeight = 200 * Math.sin(progress * Math.PI)
        const currentRadius = r * (0.5 + progress * 0.5)
        
        // 创建动态效果
        const entity = props.viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(centerLon, centerLat),
          ellipse: {
            semiMajorAxis: currentRadius,
            semiMinorAxis: currentRadius,
            height: currentHeight,
            extrudedHeight: 0,
            fill: true,
            material: Cesium.Color.fromCssColorString('#4CAF50').withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.YELLOW,
            outlineWidth: 2
          }
        })
        elevationEntities.push(entity)
        
        // 添加中心标记
        if (step % 5 === 0) {
          elevationEntities.push(props.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(centerLon, centerLat, currentHeight),
            point: {
              pixelSize: 10,
              color: Cesium.Color.RED,
              outlineColor: Cesium.Color.WHITE,
              outlineWidth: 2
            }
          }))
        }
        
        step++
      }, 100)
    }
  })
}

// 清除抬升效果
const clearElevation = () => {
  if (!props.viewer) return
  
  // 清除动画
  if (animationInterval) {
    clearInterval(animationInterval)
    animationInterval = null
  }
  
  // 清除实体
  elevationEntities.forEach(entity => {
    props.viewer.entities.remove(entity)
  })
  elevationEntities = []
  
  // 清除事件处理器
  if (handler) {
    handler.destroy()
    handler = null
  }
  
  status.value = { type: 'info', message: '已清除效果' }
}

onMounted(() => {
  status.value = { type: 'info', message: '选择参数并点击"执行"开始演示' }
})

onUnmounted(() => {
  clearElevation()
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
  flex-wrap: wrap;
}

.button-group button {
  flex: 1;
  min-width: 60px;
  padding: 8px 12px;
  font-size: 13px;
}

.button-group button.active {
  background: #2196F3;
}

.button-group button.mode-raise.active {
  background: #4CAF50;
}

.button-group button.mode-lower.active {
  background: #f44336;
}

button.secondary {
  background: #FF9800;
  width: 100%;
}

button.secondary:hover {
  background: #F57C00;
}

.info-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 12px;
  border-radius: 5px;
  margin-top: 15px;
}

.info-box h4 {
  margin: 0 0 8px 0;
  color: #4CAF50;
  font-size: 13px;
}

.info-box ol {
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
