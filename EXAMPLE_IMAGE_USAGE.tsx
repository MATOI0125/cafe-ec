// 这是一个示例文件，展示如何在你的组件中使用图片
// 当你有了真实图片后，可以参考这个方式来更新你的页面

import Image from 'next/image';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ExamplePage() {
  return (
    <div className="min-h-screen korean-calm">
      <Navigation />

      {/* Hero Section - 使用真实图片替换占位符 */}
      <section className="pt-24 pb-16 korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 替换图片占位符 */}
            <div className="relative rounded-3xl mb-12 h-[70vh] overflow-hidden gentle-fade-in">
              <Image
                src="/images/hero/hero-main.jpg"
                alt="Wind Flower Café - 바람꽃 카페"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              {/* 可选：添加渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* 欢迎文字 */}
            <div className="text-center mb-16 gentle-fade-in">
              <h1 className="text-4xl md:text-6xl korean-serif font-light text-korean-accent mb-6 korean-text-shadow">
                Wind Flower Café
              </h1>
              <p className="text-xl md:text-2xl korean-sans text-korean-light mb-4 tracking-wide">
                바람꽃 카페
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特征展示 - 使用真实图片 */}
      <section className="korean-section-spacing bg-korean-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="calm-card p-8 rounded-2xl text-center">
              <div className="relative rounded-xl mb-6 h-48 overflow-hidden">
                <Image
                  src="/images/hero/feature-coffee.jpg"
                  alt="Specialty Coffee Making"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">
                Specialty Coffee
              </h3>
              <p className="korean-sans text-korean-light">
                정성스럽게 내리는 스페셜티 커피
              </p>
            </div>

            <div className="calm-card p-8 rounded-2xl text-center">
              <div className="relative rounded-xl mb-6 h-48 overflow-hidden">
                <Image
                  src="/images/hero/feature-space.jpg"
                  alt="Cozy Café Space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">
                Cozy Space
              </h3>
              <p className="korean-sans text-korean-light">
                편안하고 아늑한 공간
              </p>
            </div>

            <div className="calm-card p-8 rounded-2xl text-center">
              <div className="relative rounded-xl mb-6 h-48 overflow-hidden">
                <Image
                  src="/images/hero/feature-nature.jpg"
                  alt="Beautiful Nature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">
                Natural Beauty
              </h3>
              <p className="korean-sans text-korean-light">
                자연 속의 힐링 공간
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 갤러리 섹션 - 사진 그리드 */}
      <section className="korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl korean-serif font-light text-korean-accent text-center mb-12">
              Gallery
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="calm-card rounded-2xl overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={`/images/hero/gallery-${i}.jpg`}
                      alt={`Gallery Photo ${i}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// 如果你想预加载图片，可以在组件外部这样做：
// import heroImage from '/images/hero/hero-main.jpg';
// import coffeeImage from '/images/hero/feature-coffee.jpg';
