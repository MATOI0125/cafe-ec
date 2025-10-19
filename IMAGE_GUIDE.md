# 📸 Wind Flower Café 图片资源规划

## 📁 目录结构说明

```
public/images/
├── hero/          # 主页主视觉图
├── story/         # 故事页面图片
├── coffee/        # 咖啡产品图片
├── dessert/       # 甜品产品图片
├── goods/         # 商品周边图片
├── location/      # 地点相关图片
├── gallery/       # 画廊/展示图片
└── team/          # 团队成员图片
```

## 🏠 主页 (/) - `/public/images/hero/`

### 主要图片
- `hero-main.jpg` (1920x1080) - 主要英雄区块背景图
  - 建议：韩国扶安民宿咖啡厅外观或内景全景图
  - 展示宁静、温暖的氛围

### 特色展示图片 (3张)
- `feature-coffee.jpg` (600x400) - 咖啡制作场景
- `feature-space.jpg` (600x400) - 咖啡厅内部空间
- `feature-nature.jpg` (600x400) - 周边自然风景

### 画廊图片 (6张)
- `gallery-1.jpg` 到 `gallery-6.jpg` (800x600)
  - 展示咖啡厅的日常氛围
  - 客人用餐场景
  - 咖啡制作过程
  - 室内外环境

### Instagram 展示 (4张)
- `insta-1.jpg` 到 `insta-4.jpg` (正方形 500x500)
  - 最新的社交媒体内容
  - 精美的咖啡和甜品照片

## 📖 故事页面 (/story) - `/public/images/story/`

### 背景图片
- `story-hero.jpg` (1920x800) - 故事页面主图
  - 建议：咖啡厅创始故事相关场景

### 理念展示 (3张)
- `philosophy-1.jpg` (600x400) - 咖啡豆选择
- `philosophy-2.jpg` (600x400) - 手工制作过程  
- `philosophy-3.jpg` (600x400) - 客人互动场景

### 价值观展示 (3张)
- `values-sustainability.jpg` (400x300) - 可持续发展
- `values-community.jpg` (400x300) - 社区关怀
- `values-quality.jpg` (400x300) - 品质追求

## ☕ 咖啡页面 (/coffee) - `/public/images/coffee/`

### 类别图片
- `espresso-category.jpg` (800x600) - 意式咖啡类别展示
- `specialty-category.jpg` (800x600) - 特调咖啡展示
- `seasonal-category.jpg` (800x600) - 季节限定咖啡

### 具体产品图片 (建议命名格式)
```
espresso/
├── americano.jpg
├── cappuccino.jpg
├── latte.jpg
└── macchiato.jpg

specialty/
├── signature-blend.jpg
├── cold-brew.jpg
├── pour-over.jpg
└── korean-coffee.jpg

seasonal/
├── spring-special.jpg
├── summer-iced.jpg
├── autumn-blend.jpg
└── winter-warm.jpg
```

## 🧁 甜品页面 (/dessert) - `/public/images/dessert/`

### 类别展示
- `handmade-cakes.jpg` (800x600) - 手工蛋糕展示
- `korean-traditional.jpg` (800x600) - 韩式传统甜品
- `seasonal-desserts.jpg` (800x600) - 季节甜品
- `cold-desserts.jpg` (800x600) - 冷饮甜品

### 具体产品图片
```
cakes/
├── cheesecake.jpg
├── chocolate-cake.jpg
├── fruit-tart.jpg
└── tiramisu.jpg

korean/
├── bingsu.jpg
├── hotteok.jpg
├── yakgwa.jpg
└── songpyeon.jpg
```

## 🛍️ 商品页面 (/goods) - `/public/images/goods/`

### 商品图片 (建议尺寸 500x500)
- `tumbler-1.jpg` - 바람꽃 텀블러
- `coffee-beans-1.jpg` - 시그니처 원두
- `mug-1.jpg` - 핸드메이드 머그컵
- `cookies-1.jpg` - 홈메이드 쿠키 세트
- `tote-bag-1.jpg` - 에코백
- `tea-set-1.jpg` - 전통차 세트

## 📍 位置页面 (/location) - `/public/images/location/`

### 地点相关图片
- `exterior.jpg` (1200x800) - 咖啡厅外观
- `map-screenshot.jpg` (800x600) - 地图截图
- `parking.jpg` (600x400) - 停车场情况

### 周边景点 (3张)
- `attraction-beach.jpg` (600x400) - 격포해수욕장
- `attraction-temple.jpg` (600x400) - 내소사
- `attraction-cliffs.jpg` (600x400) - 채석강

## 👥 团队页面 - `/public/images/team/` (如需要)
- `owner.jpg` (400x400) - 사장님
- `barista-1.jpg` (400x400) - 바리스타
- `chef.jpg` (400x400) - 디저트 셰프

## 📝 使用建议

### 图片优化
- **格式**: 推荐使用 WebP 格式，备用 JPG
- **压缩**: 使用工具压缩图片大小
- **响应式**: 准备不同尺寸的图片

### 命名规范
- 使用英文和连字符
- 避免空格和特殊字符
- 保持命名的一致性

### Next.js 中的引用方式
```tsx
// 静态导入
import heroImage from '/images/hero/hero-main.jpg'

// 动态引用
<img src="/images/coffee/americano.jpg" alt="아메리카노" />

// 使用 Next.js Image 组件 (推荐)
import Image from 'next/image'
<Image 
  src="/images/hero/hero-main.jpg" 
  alt="Wind Flower Café" 
  width={1920} 
  height={1080}
  priority
/>
```

## 🎨 图片风格建议

### 色调
- 温暖、自然的色调
- 避免过于鲜艳的颜色
- 保持与网站设计风格一致

### 构图
- 简洁、干净的构图
- 突出产品或场景主体
- 符合韩式美学的宁静感

### 光线
- 自然光拍摄优先
- 柔和的光线效果
- 避免强烈的阴影对比
