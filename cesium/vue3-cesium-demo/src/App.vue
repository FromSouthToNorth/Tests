<template>
  <div class="app-container">
    <!-- 功能选择标签页 -->
    <div class="tabs-container">
      <div 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-item"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
      >
        {{ tab.name }}
      </div>
    </div>

    <!-- Cesium 容器 -->
    <div id="cesiumContainer" ref="cesiumContainer"></div>

    <!-- 功能组件 -->
    <div class="feature-panel">
      <TerrainClipping 
        v-if="currentTab === 'clipping'" 
        :viewer="viewer"
        @update:viewer="updateViewer"
      />
      <PointCluster 
        v-if="currentTab === 'cluster'" 
        :viewer="viewer"
        @update:viewer="updateViewer"
      />
      <TerrainElevation 
        v-if="currentTab === 'elevation'" 
        :viewer="viewer"
        @update:viewer="updateViewer"
      />
    </div>

    <!-- 状态信息 -->
    <div class="status-bar">
      <span>当前功能: {{ currentTabName }}</span>
      <span v-if="loading" class="loading">加载中...</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import TerrainClipping from './components/TerrainClipping.vue'
import PointCluster from './components/PointCluster.vue'
import TerrainElevation from './components/TerrainElevation.vue'

// 标签页配置
const tabs = [
  { id: 'clipping', name: '地形裁切' },
  { id: 'cluster', name: 'Point聚合' },
  { id: 'elevation', name: '地形抬升' }
]

const currentTab = ref('clipping')
const currentTabName = computed(() => tabs.find(t => t.id === currentTab.value)?.name)
const cesiumContainer = ref(null)
const viewer = ref(null)
const loading = ref(false)

// 更新 viewer（子组件可能需要刷新）
const updateViewer = (newViewer) => {
  viewer.value = newViewer
}

// 初始化 Cesium
onMounted(async () => {
  loading.value = true
  
  try {
    // 设置 Cesium Ion Token（请替换为您自己的 token）
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiNGNkZmExNi1iNGFjLTRmMWQtYTk0YS1kZDA0YThjODg0YWEiLCJpZCI6MTIzMzI5LCJpYXQiOjE3NTI2NTYwMDV9.AGrRQMfnLy7_rqCkCqt0ESx3NX3ulhfOZLv-sDZB-vA'

    // 创建 Viewer
    viewer.value = new Cesium.Viewer(cesiumContainer.value, {
      terrainProvider: await Cesium.createWorldTerrainAsync({
        requestWaterMask: true,
        requestVertexNormals: true
      }),
      animation: false,
      timeline: false,
      homeButton: true,
      geocoder: true,
      baseLayerPicker: true,
      sceneModePicker: true,
      navigationHelpButton: false,
      fullscreenButton: true,
      shouldAnimate: true
    })

    // 设置初始视角 - 中国区域
    viewer.value.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(116.4, 39.9, 500000),
      orientation: {
        heading: 0,
        pitch: -0.5,
        roll: 0
      }
    })

    // 开启深度检测
    viewer.value.scene.globe.depthTestAgainstTerrain = true
    
    console.log('Cesium 初始化完成')
  } catch (error) {
    console.error('Cesium 初始化失败:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}

/* 标签页样式 */
.tabs-container {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: rgba(42, 42, 42, 0.9);
  border-radius: 8px;
  padding: 5px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tab-item {
  padding: 10px 25px;
  color: #ccc;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.tab-item:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

.tab-item.active {
  color: #fff;
  background: #4CAF50;
}

/* 功能面板 */
.feature-panel {
  position: absolute;
  top: 70px;
  left: 10px;
  z-index: 1000;
}

/* 状态栏 */
.status-bar {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(42, 42, 42, 0.9);
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 12px;
  z-index: 1000;
  display: flex;
  gap: 15px;
  align-items: center;
}

.loading {
  color: #4CAF50;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 覆盖 Cesium 默认控件样式 */
:global(.cesium-viewer-bottom) {
  display: none !important;
}
</style>
