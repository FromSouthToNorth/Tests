<template>
  <div class="control-panel">
    <h3>🏔️ 地形裁切</h3>
    
    <div class="control-group">
      <p class="description">在指定区域内挖空地形，创建地下通道或展示地下结构。</p>
    </div>

    <div class="control-group">
      <label>裁切形状:</label>
      <div class="button-group">
        <button 
          :class="{ active: clippingType === 'rectangle' }"
          @click="setClippingType('rectangle')"
        >
          矩形
        </button>
        <button 
          :class="{ active: clippingType === 'circle' }"
          @click="setClippingType('circle')"
        >
          圆形
        </button>
        <button 
          :class="{ active: clippingType === 'polygon' }"
          @click="setClippingType('polygon')"
        >
          多边形
        </button>
      </div>
    </div>

    <div class="control-group">
      <label>裁切深度: <span class="value">{{ depth }}m</span></label>
      <input 
        type="range" 
        v-model.number="depth" 
        min="100" 
        max="5000" 
        step="100"
        @input="updateClipping"
      />
    </div>

    <div class="control-group">
      <label>裁切宽度: <span class="value">{{ width }}m</span></label>
      <input 
        type="range" 
        v-model.number="width" 
        min="100" 
        max="2000" 
        step="50"
        @input="updateClipping"
      />
    </div>

    <div class="control-group">
      <label class="checkbox-label">
        <input type="checkbox" v-model="showEdges" @change="updateClipping" />
        显示裁切边界
      </label>
    </div>

    <div class="control-group">
      <label>边界颜色:</label>
      <input type="color" v-model="edgeColor" @input="updateClipping" />
    </div>

    <div class="button-group">
      <button class="primary" @click="applyClipping">应用裁切</button>
      <button @click="clearClipping">清除裁切</button>
    </div>

    <div class="info-box">
      <h4>📍 操作说明</h4>
      <ol>
        <li>选择裁切形状（矩形/圆形/多边形）</li>
        <li>调整裁切深度和宽度参数</li>
        <li>点击"应用裁切"后在地图上绘制区域</li>
        <li>使用鼠标左键拖拽调整位置</li>
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

const emit = defineEmits(['update:viewer'])

// 状态
const clippingType = ref('rectangle')
const depth = ref(1000)
const width = ref(500)
const showEdges = ref(true)
const edgeColor = ref('#ff0000')
const status = ref(null)

// Cesium 相关
let clippingPlanes = null
let clippingEntity = null
let handler = null
let drawPositions = []

// 设置裁切类型
const setClippingType = (type) => {
  clippingType.value = type
  status.value = { type: 'info', message: `已选择${type === 'rectangle' ? '矩形' : type === 'circle' ? '圆形' : '多边形'}裁切，点击"应用裁切"开始绘制` }
}

// 创建裁切平面
const createClippingPlanes = (center, type) => {
  if (!props.viewer) return

  const planes = []
  const color = Cesium.Color.fromCssColorString(edgeColor.value)
  
  if (type === 'rectangle') {
    // 矩形裁切 - 4个平面
    const halfWidth = width.value / 2
    const halfDepth = width.value / 2
    
    planes.push(new Cesium.ClippingPlane(
      new Cesium.Cartesian3(1, 0, 0), -halfWidth
    ))
    planes.push(new Cesium.ClippingPlane(
      new Cesium.Cartesian3(-1, 0, 0), -halfWidth
    ))
    planes.push(new Cesium.ClippingPlane(
      new Cesium.Cartesian3(0, 1, 0), -halfDepth
    ))
    planes.push(new Cesium.ClippingPlane(
      new Cesium.Cartesian3(0, -1, 0), -halfDepth
    ))
  } else if (type === 'circle') {
    // 圆形裁切 - 使用多个平面近似圆形
    const radius = width.value / 2
    const segments = 16
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      const nextAngle = ((i + 1) / segments) * Math.PI * 2
      const midAngle = (angle + nextAngle) / 2
      
      const normal = new Cesium.Cartesian3(
        Math.cos(midAngle),
        Math.sin(midAngle),
        0
      )
      planes.push(new Cesium.ClippingPlane(normal, -radius * Math.cos(Math.PI / segments)))
    }
  }
  
  return new Cesium.ClippingPlaneCollection({
    planes: planes,
    edgeWidth: showEdges.value ? 2 : 0,
    edgeColor: color,
    enabled: true,
    modelMatrix: Cesium.Transforms.eastNorthUpToFixedFrame(center)
  })
}

// 应用裁切
const applyClipping = async () => {
  if (!props.viewer) {
    status.value = { type: 'error', message: 'Cesium 未初始化' }
    return
  }

  clearClipping()
  
  status.value = { type: 'info', message: '请在地图上点击选择中心点...' }
  
  // 启用地形裁切
  const globe = props.viewer.scene.globe
  globe.clippingPlanes = new Cesium.ClippingPlaneCollection({
    planes: [],
    edgeWidth: showEdges.value ? 2 : 0,
    edgeColor: Cesium.Color.fromCssColorString(edgeColor.value),
    enabled: true
  })
  
  // 添加点击事件
  handler = new Cesium.ScreenSpaceEventHandler(props.viewer.canvas)
  
  handler.setInputAction((click) => {
    const cartesian = props.viewer.camera.pickEllipsoid(click.position, props.viewer.scene.globe.ellipsoid)
    
    if (cartesian) {
      const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
      const longitude = Cesium.Math.toDegrees(cartographic.longitude)
      const latitude = Cesium.Math.toDegrees(cartographic.latitude)
      
      createClippingAtPosition(longitude, latitude)
      
      if (handler) {
        handler.destroy()
        handler = null
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
}

// 在指定位置创建裁切
const createClippingAtPosition = (longitude, latitude) => {
  if (!props.viewer) return
  
  const center = Cesium.Cartesian3.fromDegrees(longitude, latitude)
  const w = width.value
  
  // 使用 createClippingPlanes 创建裁切平面
  const clippingPlanesCollection = createClippingPlanes(center, clippingType.value)
  if (!clippingPlanesCollection) return
  
  // 应用裁切平面到地形
  props.viewer.scene.globe.clippingPlanes = clippingPlanesCollection
  
  // 创建可视化实体
  createVisualEntity(longitude, latitude)
  
  // 创建地下隧道效果
  createUndergroundEffect(longitude, latitude)
  
  status.value = { 
    type: 'success', 
    message: `已在 [${longitude.toFixed(4)}, ${latitude.toFixed(4)}] 创建${clippingType.value === 'rectangle' ? '矩形' : clippingType.value === 'circle' ? '圆形' : '多边形'}裁切` 
  }
  
  // 飞到这个位置
  props.viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, Math.max(w * 2, 2000)),
    orientation: {
      heading: 0,
      pitch: -0.5,
      roll: 0
    }
  })
}

// 创建可视化实体
const createVisualEntity = (longitude, latitude) => {
  const w = width.value
  const d = depth.value
  
  if (clippingType.value === 'rectangle') {
    // 矩形边框
    clippingEntity = props.viewer.entities.add({
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(
          longitude - w / 111320,
          latitude - w / 111320,
          longitude + w / 111320,
          latitude + w / 111320
        ),
        height: -d,
        extrudedHeight: 0,
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.fromCssColorString(edgeColor.value),
        outlineWidth: 3
      }
    })
  } else if (clippingType.value === 'circle') {
    // 圆形
    clippingEntity = props.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
      ellipse: {
        semiMajorAxis: w / 2,
        semiMinorAxis: w / 2,
        height: -d,
        extrudedHeight: 0,
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.fromCssColorString(edgeColor.value),
        outlineWidth: 3
      }
    })
  } else {
    // 多边形（六边形）
    const positions = []
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const x = longitude + (w / 2 / 111320) * Math.cos(angle) / Math.cos(latitude * Math.PI / 180)
      const y = latitude + (w / 2 / 111320) * Math.sin(angle)
      positions.push(Cesium.Cartesian3.fromDegrees(x, y))
    }
    
    clippingEntity = props.viewer.entities.add({
      polygon: {
        hierarchy: new Cesium.PolygonHierarchy(positions),
        height: -d,
        extrudedHeight: 0,
        fill: false,
        outline: true,
        outlineColor: Cesium.Color.fromCssColorString(edgeColor.value),
        outlineWidth: 3
      }
    })
  }
}

// 创建地下效果（隧道壁）
const createUndergroundEffect = (longitude, latitude) => {
  const w = width.value
  const d = depth.value
  
  // 添加隧道底部
  props.viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(longitude, latitude, -d),
    ellipse: {
      semiMajorAxis: w / 2,
      semiMinorAxis: w / 2,
      fill: true,
      material: new Cesium.GridMaterialProperty({
        color: Cesium.Color.GRAY,
        cellAlpha: 0.5,
        lineCount: new Cesium.Cartesian2(8, 8),
        lineThickness: new Cesium.Cartesian2(2, 2)
      })
    }
  })
}

// 更新裁切参数
const updateClipping = () => {
  if (props.viewer?.scene.globe.clippingPlanes) {
    props.viewer.scene.globe.clippingPlanes.edgeWidth = showEdges.value ? 3 : 0
    props.viewer.scene.globe.clippingPlanes.edgeColor = Cesium.Color.fromCssColorString(edgeColor.value)
  }
}

// 清除裁切
const clearClipping = () => {
  if (!props.viewer) return
  
  // 清除地形裁切
  if (props.viewer.scene.globe.clippingPlanes) {
    props.viewer.scene.globe.clippingPlanes.enabled = false
    props.viewer.scene.globe.clippingPlanes = undefined
  }
  
  // 清除实体
  if (clippingEntity) {
    props.viewer.entities.remove(clippingEntity)
    clippingEntity = null
  }
  
  // 清除事件处理器
  if (handler) {
    handler.destroy()
    handler = null
  }
  
  status.value = { type: 'info', message: '已清除裁切' }
}

onMounted(() => {
  status.value = { type: 'info', message: '选择裁切形状并点击"应用裁切"' }
})

onUnmounted(() => {
  clearClipping()
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
