# Wind Flower Café 바람꽃 카페

A beautiful Korean-style guesthouse café website built with Next.js, TypeScript, and Tailwind CSS. This project showcases a tranquil café in Buan, South Korea, with a focus on serene aesthetics and Korean design principles.

## ✨ Features

- **Korean Design Aesthetic**: Calm, tranquil color palette with Korean typography
- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **E-commerce Integration**: Shopping cart functionality for café goods and menu items
- **Multi-language Support**: Korean and English content throughout
- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **SEO Optimized**: Proper meta tags and structure for search engines

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with Korean metadata
│   ├── page.tsx          # Homepage with hero section
│   ├── story/            # Café story and philosophy
│   ├── coffee/           # Coffee menu with categories
│   ├── dessert/          # Dessert menu with Korean specialties
│   ├── goods/            # Merchandise and take-home items
│   └── location/         # Location and contact information
├── components/
│   ├── Navigation.tsx    # Responsive navigation with mobile menu
│   ├── Footer.tsx        # Korean-styled footer
│   ├── CartContext.tsx   # Shopping cart state management
│   ├── CartButton.tsx    # Cart dropdown functionality
│   └── AddToCartButton.tsx # Add to cart component
└── globals.css           # Korean design system and utilities
```

## 🎨 Design System

### Colors
- **Korean Calm**: `#fdfcf9` - Primary background
- **Korean Warm**: `#f9f7f4` - Secondary background  
- **Korean Accent**: `#8b7355` - Primary accent color
- **Korean Light**: `#6b5b47` - Text color
- **Korean Secondary**: `#f5f2ed` - Card backgrounds

### Typography
- **Headers**: Noto Serif KR (Korean serif font)
- **Body Text**: Noto Sans KR (Korean sans-serif font)
- **Design**: Clean, readable typography with proper spacing

### Layout Principles
- Generous white space for tranquil feeling
- Soft, rounded corners on cards and images
- Gentle animations and hover effects
- Mobile-first responsive design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd cafe-ec
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3003](http://localhost:3003) in your browser

## 📱 Pages Overview

### Home (`/`)
- Hero section with main café image
- Feature highlights 
- Photo gallery
- Instagram integration

### Story (`/story`)
- Café background and history
- Philosophy and values
- Team introduction
- Mission statement

### Coffee (`/coffee`)
- Espresso-based drinks
- Specialty coffee menu
- Seasonal offerings
- Pricing and descriptions

### Dessert (`/dessert`)
- Handmade cakes and pastries
- Traditional Korean desserts
- Seasonal specialties
- Cold desserts and beverages

### Goods (`/goods`)
- Café merchandise
- Take-home coffee beans
- Branded items
- Gift sets

### Location (`/location`)
- Interactive map
- Directions and transportation
- Contact information
- Nearby attractions

## 🛒 E-commerce Features

- **Shopping Cart**: Add/remove items from multiple categories
- **Product Categories**: Coffee, desserts, and merchandise
- **Price Display**: Korean won (₩) formatting
- **Responsive Cart**: Dropdown cart accessible from navigation

## 📸 Image Integration

The project includes comprehensive image placeholders throughout all pages. To complete the website:

1. Replace placeholder images with actual café photos
2. Recommended image sizes are noted in each placeholder
3. Use high-quality images that match the tranquil aesthetic

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify  
- Railway
- DigitalOcean App Platform

## 🔧 Customization

### Colors
Update the color palette in `src/app/globals.css`:
```css
:root {
  --korean-calm: #fdfcf9;
  --korean-accent: #8b7355;
  /* Add your custom colors */
}
```

### Content
- Update Korean/English text in each page component
- Modify menu items and pricing
- Replace contact information and address

### Styling
- All styles use Tailwind CSS utility classes
- Custom Korean design utilities available
- Responsive breakpoints: `md:` (768px+), `lg:` (1024px+)

## 📞 Contact & Support

For questions about this project or Korean café design implementation:

- **Location**: Buan-gun, Jeollabuk-do, South Korea  
- **Email**: info@windflower.cafe
- **Instagram**: @windflowercafe

## 📄 License

This project is created as a demonstration of Korean café website design and development best practices.

---

Built with ❤️ for Korean café culture and modern web design.
