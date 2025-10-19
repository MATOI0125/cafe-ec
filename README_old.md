# ☕ 咖啡小屋 - Coffee House Website

一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的现代化咖啡店前端网站。

## 🌟 项目特色

- **现代化设计**: 采用温暖的咖啡色调和优雅的界面设计
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **优雅动画**: 流畅的过渡效果和动画，提升用户体验
- **SEO 优化**: 使用 Next.js 的 SSR 功能，优化搜索引擎排名
- **TypeScript 支持**: 类型安全的代码开发

## 📄 页面结构

- **首页** (`/`): 展示咖啡店的主要特色和品牌形象
- **菜单页面** (`/menu`): 详细的咖啡和糕点菜单
- **关于我们** (`/about`): 咖啡店的故事、理念和团队介绍

## 🛠 技术栈

- **Framework**: Next.js 15.5.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Development**: ESLint, PostCSS

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3001](http://localhost:3001) 查看网站效果。

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # 关于我们页面
│   ├── menu/              # 菜单页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # 可复用组件
│   ├── Navigation.tsx     # 导航组件
│   └── Footer.tsx         # 页脚组件
public/                    # 静态资源
```

## 🎨 设计特色

### 色彩搭配
- 主色调: 温暖的琥珀色系 (#92400e, #d97706, #f59e0b)
- 背景色: 奶油色渐变 (#fefcf3)
- 强调色: 金色渐变效果

### 动画效果
- 卡片悬停效果
- 渐变按钮动画
- 脉冲动画图标
- 淡入上升动画

---

*用心制作每一杯咖啡，用技术打造每一个页面* ☕
