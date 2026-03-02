<template>
  <div class="app-container">
    <!-- 分类标签 -->
    <CategoryTabs 
      v-model="activeCategory" 
      :categories="categoriesWithCount" 
    />
    
    <!-- 年份标题 -->
    <div class="year-section">
      <h1 class="year-title">2026</h1>
      <div class="year-line"></div>
    </div>
    
    <!-- 视频网格 -->
    <div class="video-grid">
      <VideoCard 
        v-for="video in filteredVideos" 
        :key="video.id" 
        :video="video"
      />
    </div>
    
    <!-- 空状态 -->
    <div v-if="filteredVideos.length === 0" class="empty-state">
      <div class="empty-icon">📹</div>
      <p>暂无该分类的视频</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CategoryTabs from './components/CategoryTabs.vue'
import VideoCard from './components/VideoCard.vue'

// 基础分类数据
const baseCategories = [
  { id: 'all', name: '全部' },
  { id: 'product', name: '产品及功能模块管理' },
  { id: '2d-component', name: '二维界面引用组件' },
  { id: '2d-panel', name: '二维面板' },
  { id: '3d-scene', name: '三维场景' },
  { id: 'unified-ops', name: '统一运维' },
  { id: 'system-model', name: '系统及设备(数据模型)' },
  { id: 'project-config', name: '项目基础配置' },
  { id: 'ops-map', name: '项目运维一张图' },
  { id: 'disaster', name: '灾害综合防治' },
  { id: 'control', name: '综合管控平台' },
  { id: 'info-platform', name: '综合信息平台' }
]

// 带数量统计的分类数据
const categoriesWithCount = computed(() => {
  return baseCategories.map(cat => {
    const count = cat.id === 'all' 
      ? videos.length 
      : videos.filter(v => v.category === cat.id).length
    return { ...cat, count }
  })
})

// 当前选中的分类
const activeCategory = ref('all')

// 视频数据
const videos = [
  {
    id: 1,
    title: 'CAD图纸上传发布',
    description: 'CAD图纸上传与发布流程演示',
    category: 'product',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=1'
  },
  {
    id: 2,
    title: '消息推送-关于企业微信消息推送配置',
    description: '企业微信集成消息推送功能',
    category: 'product',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=2'
  },
  {
    id: 3,
    title: '消息推送-短信推送(1)',
    description: '短信推送服务配置教程',
    category: 'product',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=3'
  },
  {
    id: 4,
    title: '三维设备属性展示及配置',
    description: '3D场景中设备属性展示',
    category: '3d-scene',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=4'
  },
  {
    id: 5,
    title: '自定义创建风格化动态面板',
    description: '动态面板样式自定义教程',
    category: '2d-panel',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=5'
  },
  {
    id: 6,
    title: '井下煤流到地面选煤工艺讲解',
    description: '煤矿工艺流程3D演示',
    category: '3d-scene',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=6'
  },
  {
    id: 7,
    title: '消息推送-关于广播电话推送配置',
    description: '广播电话系统集成配置',
    category: 'product',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=7'
  },
  {
    id: 8,
    title: '水泵设备拆解',
    description: '水泵设备3D拆解动画',
    category: '3d-scene',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=8'
  },
  {
    id: 9,
    title: '动态点消息推送配置-自主避...',
    description: '动态点位消息推送设置',
    category: 'product',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=9'
  },
  {
    id: 10,
    title: '子系统接入-设备分组与取位...',
    description: '子系统设备分组配置',
    category: 'system-model',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=10'
  },
  {
    id: 11,
    title: '子系统常规接入',
    description: '子系统标准接入流程',
    category: 'system-model',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=11'
  },
  {
    id: 12,
    title: '二维界面图表效果展示',
    description: '数据可视化图表展示',
    category: '2d-panel',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=12'
  },
  {
    id: 13,
    title: '工业场景漫游展示',
    description: '工业场景3D漫游演示',
    category: '3d-scene',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    cover: 'https://picsum.photos/400/250?random=13'
  }
]

// 根据分类筛选视频
const filteredVideos = computed(() => {
  if (activeCategory.value === 'all') {
    return videos
  }
  return videos.filter(video => video.category === activeCategory.value)
})
</script>

<style scoped>
.app-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
}

/* 年份区域 */
.year-section {
  margin: 32px 0 24px;
}

.year-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1px;
}

.year-line {
  width: 60px;
  height: 4px;
  background: #1a1a1a;
  margin-top: 8px;
  border-radius: 2px;
}

/* 视频网格 */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 8px 0;
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #999;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-state p {
  font-size: 16px;
}

/* 移动端适配 */
@media (max-width: 1200px) {
  .video-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .app-container {
    padding: 16px;
  }
  
  .year-section {
    margin: 20px 0 16px;
  }
  
  .year-title {
    font-size: 32px;
  }
  
  .year-line {
    width: 40px;
    height: 3px;
  }
  
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .app-container {
    padding: 12px;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .year-title {
    font-size: 28px;
  }
}
</style>
