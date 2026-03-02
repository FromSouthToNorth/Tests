# Vue3 + Cesium 地形操作演示

基于 Vue3 和 Cesium 的三维地理信息系统演示项目，包含地形裁切、Point 聚合和地形抬升三大功能。

## 功能介绍

### 1. 地形裁切 (Terrain Clipping)
- 支持矩形、圆形、多边形三种裁切形状
- 可调节裁切深度和宽度
- 显示裁切边界
- 创建地下隧道效果

### 2. Point 聚合 (Point Clustering)
- 大规模点数据的动态聚合显示
- 可调节聚合距离和最小聚合数量
- 支持多种点样式（圆形、图钉、旗帜）
- 实时统计信息显示
- 点击聚合查看详细信息

### 3. 地形抬升 (Terrain Elevation)
- 模拟地形抬升和沉降效果
- 支持矩形和圆形影响区域
- 可调节影响范围、高度和过渡坡度
- 动画演示功能
- 剖面线和高度标记显示

## 技术栈

- Vue 3.4+
- Cesium 1.115+
- Vite 5.0+
- vite-plugin-cesium

## 项目结构

```
vue3-cesium-demo/
├── public/                 # 静态资源
├── src/
│   ├── components/         # 组件
│   │   ├── TerrainClipping.vue   # 地形裁切组件
│   │   ├── PointCluster.vue      # 点聚合组件
│   │   └── TerrainElevation.vue  # 地形抬升组件
│   ├── styles/
│   │   └── common.css      # 公共样式
│   ├── App.vue             # 主组件
│   └── main.js             # 入口文件
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置
└── README.md               # 项目说明
```

## 安装与运行

### 1. 安装依赖

```bash
cd cesium/vue3-cesium-demo
npm install
```

### 2. 开发模式运行

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 使用说明

1. **切换功能**: 点击顶部标签页切换不同的功能模块
2. **地形裁切**: 选择裁切形状 -> 调整参数 -> 点击"应用裁切" -> 在地图上点击位置
3. **Point 聚合**: 点击"生成随机点" -> 调整聚合参数 -> 查看聚合效果
4. **地形抬升**: 选择模式（抬升/沉降）-> 调整参数 -> 点击"执行" -> 在地图上点击位置

## 配置 Cesium Ion Token

项目已内置一个公共 Token，如需使用自己的 Token，请修改 `src/App.vue` 中的 `Cesium.Ion.defaultAccessToken`。

获取 Token: https://cesium.com/ion/tokens

## 注意事项

1. 确保网络连接正常以加载 Cesium 资源
2. 建议使用 Chrome、Edge 等现代浏览器
3. 部分功能需要较好的显卡性能支持
4. 首次加载可能需要一些时间来初始化地形数据

## 许可证

MIT License
