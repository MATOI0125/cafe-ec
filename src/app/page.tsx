import Image from 'next/image';
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  // FV 이미지 배열
  const carouselImages = [
    '/images/gallery/FV1.png',
    '/images/gallery/FV2.png',
    '/images/gallery/FV3.png',
    '/images/gallery/FV4.png'
  ];

  return (
    <div className="min-h-screen korean-calm">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="w-full">
            {/* 轮播图片区域 - 带文字覆盖层 */}
            <div className="relative mb-12 gentle-fade-in w-full">
              <ImageCarousel 
                images={carouselImages}
                interval={5000}
                height="h-[70vh]"
              />
              
              {/* 标语覆盖层 - 确保不阻挡轮播控件 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="text-center text-white pointer-events-none">
                  <h2 className="text-3xl md:text-5xl korean-serif font-light mb-4 drop-shadow-lg">
                    자연이 주는 휴식,
                  </h2>
                  <h2 className="text-3xl md:text-5xl korean-serif font-light mb-6 drop-shadow-lg">
                    변산바람꽃에서 느껴보세요
                  </h2>
                  <p className="text-lg md:text-xl korean-sans opacity-90 max-w-xl mx-auto leading-relaxed drop-shadow-md">
                    Nature&apos;s gift of rest, experience it at Byeonsan Wind Flower
                  </p>
                </div>
              </div>
            </div>

            {/* 欢迎文字 */}
            <div className="text-center mb-16 gentle-fade-in">
              <h1 className="text-4xl md:text-6xl korean-serif font-light text-korean-accent mb-6 korean-text-shadow">
                Wind Flower Café
              </h1>
              <p className="text-xl md:text-2xl korean-sans text-korean-light mb-4 tracking-wide">
                바람꽃 카페
              </p>
              <p className="text-lg korean-sans text-korean-light max-w-2xl mx-auto leading-relaxed">
                한국 부안의 고즈넉한 민박 속에서 만나는<br />
                조용하고 평화로운 카페 공간입니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 소개 */}
      <section className="korean-section-spacing bg-korean-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="calm-card p-8 rounded-2xl text-center">
              <div className="relative rounded-xl mb-6 h-48 overflow-hidden">
                <Image
                  src="/images/hero/feature-coffee.jpg"
                  alt="Specialty Coffee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">Specialty Coffee</h3>
              <p className="korean-sans text-korean-light leading-relaxed">
                정성스럽게 내린 스페셜티 커피와<br />
                집에서 만든 따뜻한 디저트
              </p>
            </div>

            <div className="calm-card p-8 rounded-2xl text-center">
              <div className="relative rounded-xl mb-6 h-48 overflow-hidden">
                <Image
                  src="/images/hero/feature-space.jpg"
                  alt="Peaceful Space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">Peaceful Space</h3>
              <p className="korean-sans text-korean-light leading-relaxed">
                자연 속에서 느끼는 고요함과<br />
                편안한 휴식의 시간
              </p>
            </div>

            <div className="calm-card p-8 rounded-2xl text-center">
              <div className="relative rounded-xl mb-6 h-48 overflow-hidden">
                <Image
                  src="/images/hero/feature-nature.jpg"
                  alt="Buan Nature"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">Buan Nature</h3>
              <p className="korean-sans text-korean-light leading-relaxed">
                부안의 아름다운 자연 경관과<br />
                함께하는 특별한 경험
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}

      {/* Contact Section */}
      <section className="korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl korean-serif font-light text-korean-accent mb-4">
              연락처 <span className="text-korean-light">/</span> <span className="text-korean-accent">Contact</span>
            </h2>
            <div className="flex flex-col items-center space-y-4 text-korean-light text-lg">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📍</span>
                <span>스테이 변산바람꽃</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📍</span>
                <span>６−７ Jakdang-gil, Jinseo-myeon, Buan-gun, Jeonbuk State</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📞</span>
                <span>+82 10-9584-1559</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✉️</span>
                <span>info@windflower.cafe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl korean-serif font-light text-korean-accent mb-4">
                Gallery
              </h2>
              <p className="korean-sans text-korean-light text-lg">
                카페의 아름다운 순간들
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="calm-card rounded-2xl overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={`/images/gallery/FV${i}.png`}
                      alt={`Wind Flower Café Scene ${i}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/story" className="korean-button text-white px-8 py-3 rounded-full korean-sans font-medium">
                더 많은 이야기 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="korean-section-spacing bg-korean-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl korean-serif font-light text-korean-accent mb-6">
              Follow Us
            </h2>
            <p className="korean-sans text-korean-light text-lg mb-8">
              인스타그램에서 바람꽃 민박의 일상을 만나보세요
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="calm-card rounded-xl overflow-hidden aspect-square">
                  <div className="relative h-full">
                    <Image
                      src={`/images/gallery/ins${i}.png`}
                      alt={`Instagram Gallery ${i}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            <a 
              href="https://www.instagram.com/stay.windflower/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="korean-button text-white px-8 py-3 rounded-full korean-sans font-medium inline-flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@stay.windflower</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
