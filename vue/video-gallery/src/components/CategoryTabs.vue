<template>
  <div class="category-section">
    <div 
      ref="tabsContainer"
      class="tabs-container"
    >
      <div 
        v-for="category in categories" 
        :key="category.id"
        class="tab-item"
        :class="{ 
          active: modelValue === category.id,
          'has-more': category.count !== undefined 
        }"
        @click="handleTabClick(category.id)"
      >
        <span class="tab-text">{{ category.name }}</span>
        <span v-if="category.count !== undefined" class="tab-count">
          {{ formatCount(category.count) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

// 格式化数量显示
const formatCount = (count) => {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + 'w'
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k'
  }
  return count
}

// 点击标签
const handleTabClick = (categoryId) => {
  emit('update:modelValue', categoryId)
}
</script>

<style scoped>
/* 使用纯 CSS sticky，无需 JS 监听，避免闪烁 */
.category-section {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 24px;
  padding: 12px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

/* 标签容器 - 自适应换行布局 */
.tabs-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 4px 2px;
}

/* 标签项 */
.tab-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 20px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  user-select: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}

.tab-item:hover {
  border-color: #c0c4cc;
  color: #409eff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.12);
}

.tab-item.active {
  background: linear-gradient(135deg, #409eff 0%, #3a8ee6 100%);
  border-color: #409eff;
  color: #fff;
  box-shadow: 0 4px 14px rgba(64, 158, 255, 0.35);
  transform: translateY(-1px);
}

.tab-text {
  line-height: 1.4;
}

/* 数量徽章 */
.tab-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 9px;
  font-size: 11px;
  font-weight: 500;
  color: #909399;
  transition: all 0.25s ease;
}

.tab-item.active .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

/* ========== 响应式适配 - 优雅换行 ========== */

/* 超大屏 */
@media (min-width: 1600px) {
  .tabs-container {
    gap: 12px;
  }
  
  .tab-item {
    padding: 10px 24px;
    font-size: 15px;
  }
}

/* 大屏 */
@media (min-width: 1400px) and (max-width: 1599px) {
  .tabs-container {
    gap: 10px;
  }
  
  .tab-item {
    padding: 9px 20px;
    font-size: 14px;
  }
}

/* 中大屏 - 标准布局 */
@media (min-width: 1200px) and (max-width: 1399px) {
  .tab-item {
    padding: 8px 16px;
  }
}

/* 平板横向 */
@media (min-width: 992px) and (max-width: 1199px) {
  .tab-item {
    padding: 7px 14px;
    font-size: 13px;
  }
}

/* 平板纵向 - 减小间距 */
@media (min-width: 768px) and (max-width: 991px) {
  .category-section {
    margin-bottom: 20px;
    padding: 10px 0;
  }
  
  .tabs-container {
    gap: 8px;
  }
  
  .tab-item {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  .tab-count {
    min-width: 16px;
    height: 16px;
    font-size: 10px;
  }
}

/* 手机 - 紧凑换行 */
@media (max-width: 767px) {
  .category-section {
    margin-bottom: 16px;
    padding: 10px 0;
  }
  
  .tabs-container {
    gap: 8px;
  }
  
  .tab-item {
    padding: 6px 12px;
    font-size: 13px;
    border-radius: 16px;
    flex: 0 0 auto;
  }
  
  .tab-count {
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    font-size: 10px;
  }
}

/* 小屏手机 - 更紧凑 */
@media (max-width: 480px) {
  .tabs-container {
    gap: 6px;
  }
  
  .tab-item {
    padding: 5px 10px;
    font-size: 12px;
  }
}

/* 超小屏 - 最小化 */
@media (max-width: 360px) {
  .tabs-container {
    gap: 5px;
  }
  
  .tab-item {
    padding: 5px 8px;
    font-size: 11px;
  }
  
  .tab-count {
    display: none; /* 超小屏隐藏数量 */
  }
}

/* 动画效果 */
@keyframes tabPulse {
  0%, 100% {
    transform: translateY(-1px) scale(1);
  }
  50% {
    transform: translateY(-1px) scale(1.02);
  }
}

.tab-item.active {
  animation: tabPulse 0.3s ease;
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .tab-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    color: #c0c4cc;
  }
  
  .tab-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #409eff;
  }
}
</style>
