<template>
  <div class="video-card">
    <div class="video-cover" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @mousemove="handleMouseMove"
      @click.stop>
      <!-- 视频元素（预览用） -->
      <video ref="videoRef" class="video-element" :src="video.url" muted preload="metadata" playsinline
        @loadedmetadata="onLoadedMetadata"></video>

      <!-- 封面图（视频未加载时显示） -->
      <div v-if="!isPlaying && video.cover" class="cover-image">
        <img :src="video.cover" :alt="video.title">
      </div>

      <!-- 播放按钮 - 默认显示，悬浮时隐藏 -->
      <!-- <div v-if="!isHovering" class="play-button" @click.stop="openPlayer">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div> -->

      <!-- 进度指示器 -->
      <div v-if="isHovering" class="progress-indicator">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: previewProgress + '%' }"></div>
        </div>
        <span class="time-display">{{ formatTime(previewTime) }}</span>
      </div>

      <!-- 悬浮提示 - 放在顶部，不遮挡中央 -->
      <div v-if="isHovering" class="hover-hint">
        <span class="hint-icon">↔</span>
        <span class="hint-text">左右移动预览</span>
      </div>

      <!-- 悬浮时的播放按钮 - 放在右下角 -->
      <div v-if="isHovering" class="play-button-float" @click.stop="openPlayer">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>

    <!-- 视频标题 -->
    <div class="video-info" @click="openPlayer">
      <h3 class="video-title">{{ video.title }}</h3>
      <p v-if="video.description" class="video-desc">{{ video.description }}</p>
    </div>

    <!-- 视频播放器弹窗 -->
    <Teleport to="body">
      <Transition name="player">
        <div v-if="showPlayer" class="video-player-modal" @click.self="closePlayer">
          <div class="player-container">
            <!-- 关闭按钮 -->
            <button class="close-btn" @click="closePlayer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>

            <!-- 视频播放器 -->
            <div class="player-wrapper">
              <video ref="playerRef" class="player-video" :src="video.url" controls autoplay
                @click="togglePlay"></video>
            </div>

            <!-- 视频信息 -->
            <div class="player-info">
              <h2 class="player-title">{{ video.title }}</h2>
              <p v-if="video.description" class="player-desc">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// vue3 + cesium
// 功能
// 1.地形裁切
// 2.point聚合
// 3.地形抬升

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const videoRef = ref(null)
const playerRef = ref(null)
const isHovering = ref(false)
const isPlaying = ref(false)
const showPlayer = ref(false)
const videoDuration = ref(0)
const previewTime = ref(0)
const previewProgress = computed(() => {
  if (videoDuration.value === 0) return 0
  return (previewTime.value / videoDuration.value) * 100
})

// 格式化时间显示
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// 视频元数据加载完成
const onLoadedMetadata = () => {
  if (videoRef.value) {
    videoDuration.value = videoRef.value.duration || 0
  }
}

// 鼠标进入
const handleMouseEnter = () => {
  isHovering.value = true
  if (videoRef.value) {
    videoRef.value.currentTime = 0
    isPlaying.value = true
  }
}

// 鼠标离开
const handleMouseLeave = () => {
  isHovering.value = false
  isPlaying.value = false
  previewTime.value = 0
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }
}

// 鼠标移动 - 实现快进快退效果
const handleMouseMove = (e) => {
  if (!videoRef.value || videoDuration.value === 0) return

  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const width = rect.width

  const ratio = Math.max(0, Math.min(1, x / width))
  previewTime.value = ratio * videoDuration.value

  videoRef.value.currentTime = previewTime.value

  const playPromise = videoRef.value.play()
  if (playPromise !== undefined) {
    playPromise.catch(() => { })
  }
}

// 打开播放器
const openPlayer = () => {
  showPlayer.value = true
  document.body.style.overflow = 'hidden'
}

// 关闭播放器
const closePlayer = () => {
  showPlayer.value = false
  document.body.style.overflow = ''
  if (playerRef.value) {
    playerRef.value.pause()
  }
}

// 切换播放/暂停
const togglePlay = () => {
  if (!playerRef.value) return
  if (playerRef.value.paused) {
    playerRef.value.play()
  } else {
    playerRef.value.pause()
  }
}
</script>

<style scoped>
.video-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.video-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #000;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 播放按钮 - 默认居中显示 */
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.play-button svg {
  width: 28px;
  height: 28px;
  color: #409eff;
  margin-left: 4px;
}

.play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: #fff;
}

/* 悬浮时的播放按钮 - 右下角 */
.play-button-float {
  position: absolute;
  right: 12px;
  bottom: 36px;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  z-index: 15;
  animation: fadeIn 0.2s ease;
}

.play-button-float svg {
  width: 22px;
  height: 22px;
  color: #409eff;
  margin-left: 3px;
}

.play-button-float:hover {
  transform: scale(1.1);
  background: #fff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 进度指示器 */
.progress-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 5;
}

.progress-bar {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #409eff;
  border-radius: 2px;
  transition: width 0.05s linear;
}

.time-display {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  min-width: 40px;
  text-align: right;
}

/* 悬浮提示 - 放在顶部中央 */
.hover-hint {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  padding: 6px 14px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  animation: slideDown 0.2s ease;
  z-index: 20;
}

.hint-icon {
  color: #fff;
  font-size: 13px;
}

.hint-text {
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* 视频信息 */
.video-info {
  padding: 12px 16px;
}

.video-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.video-desc {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ========== 视频播放器弹窗 ========== */
.video-player-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.player-container {
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* 关闭按钮 */
.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.close-btn svg {
  width: 24px;
  height: 24px;
  color: #fff;
}

/* 播放器包装 */
.player-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

.player-video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* 播放器信息 */
.player-info {
  padding: 20px 0;
  color: #fff;
}

.player-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.player-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

/* 弹窗动画 */
.player-enter-active,
.player-leave-active {
  transition: all 0.3s ease;
}

.player-enter-from,
.player-leave-to {
  opacity: 0;
}

.player-enter-from .player-container,
.player-leave-to .player-container {
  transform: scale(0.95);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .video-card {
    border-radius: 8px;
  }

  .play-button {
    width: 48px;
    height: 48px;
    opacity: 0.95;
  }

  .play-button svg {
    width: 24px;
    height: 24px;
  }

  .play-button-float {
    width: 40px;
    height: 40px;
    right: 10px;
    bottom: 32px;
  }

  .play-button-float svg {
    width: 20px;
    height: 20px;
  }

  .hover-hint {
    padding: 5px 12px;
    top: 10px;
  }

  .hint-text {
    font-size: 11px;
  }

  .video-info {
    padding: 10px 12px;
  }

  .video-title {
    font-size: 13px;
  }

  .progress-indicator {
    padding: 10px;
  }

  /* 播放器移动端适配 */
  .video-player-modal {
    padding: 0;
  }

  .player-container {
    max-height: 100vh;
    height: 100%;
  }

  .player-wrapper {
    border-radius: 0;
    flex: 1;
    aspect-ratio: auto;
  }

  .close-btn {
    top: 16px;
    right: 16px;
    background: rgba(0, 0, 0, 0.5);
  }

  .player-info {
    padding: 16px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  }

  .player-title {
    font-size: 16px;
  }

  .player-desc {
    font-size: 13px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {

  .hover-hint,
  .play-button-float {
    display: none;
  }

  .play-button {
    opacity: 0.95;
  }
}
</style>
