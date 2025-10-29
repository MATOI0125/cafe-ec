import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Story() {
  return (
    <div className="min-h-screen korean-calm">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="korean-section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16 gentle-fade-in">
                <h1 className="text-4xl md:text-5xl korean-serif font-light text-korean-accent mb-6">
                  Our Story
                </h1>
                <p className="text-xl korean-sans text-korean-light">
                  바람꽃 카페의 이야기
                </p>
              </div>

              {/* Main Story Carousel */}
              <div className="rounded-3xl mb-12 overflow-hidden h-[60vh] relative">
                <ImageCarousel
                  images={["/images/hero/story1.png", "/images/hero/story2.png", "/images/hero/story3.png"]}
                  interval={5000}
                  height="h-[60vh]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="korean-section-spacing bg-korean-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl korean-serif font-medium text-korean-accent mb-6">
                    시작
                  </h2>
                  <div className="korean-sans text-korean-light leading-relaxed space-y-4">
                    <p>
                      부안의 고즈넉한 자연 속에서 시작된 바람꽃 카페는 
                      도시의 번잡함을 떠나 진정한 휴식을 찾는 이들을 위한 공간입니다.
                    </p>
                    <p>
                      오래된 한옥을 개조하여 만들어진 이곳은 전통과 현대가 
                      조화롭게 어우러진 특별한 장소입니다.
                    </p>
                    <p>
                      매일 아침 신선하게 로스팅한 원두로 내리는 커피 한 잔에는 
                      자연의 향기와 정성이 가득 담겨 있습니다.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl h-80 overflow-hidden relative">
                  <Image
                    src="/images/gallery/FV2.png"
                    alt="Beginning Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="rounded-2xl h-80 overflow-hidden relative md:order-1">
                  <Image
                    src="/images/hero/feature-coffee2.jpg"
                    alt="Philosophy Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:order-2">
                  <h2 className="text-3xl korean-serif font-medium text-korean-accent mb-6">
                    철학
                  </h2>
                  <div className="korean-sans text-korean-light leading-relaxed space-y-4">
                    <p>
                      우리는 커피 한 잔이 단순한 음료가 아닌, 
                      일상 속 작은 행복이 될 수 있다고 믿습니다.
                    </p>
                    <p>
                      자연과 함께 호흡하며, 느린 시간의 소중함을 
                      전해드리고 싶습니다.
                    </p>
                    <p>
                      방문해 주시는 모든 분들이 마음의 평화를 찾고, 
                      새로운 에너지를 얻어 가시기를 바랍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="korean-section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  Values
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  우리가 소중히 여기는 가치들
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="calm-card p-8 rounded-2xl text-center">
                  <div className="rounded-xl mb-6 h-48 overflow-hidden relative">
                    <Image
                      src="/images/gallery/FV4.png"
                      alt="Value 1"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">
                    자연과의 조화
                  </h3>
                  <p className="korean-sans text-korean-light leading-relaxed">
                    부안의 아름다운 자연 환경을 보존하며
                    지속 가능한 방식으로 운영합니다
                  </p>
                </div>

                <div className="calm-card p-8 rounded-2xl text-center">
                  <div className="rounded-xl mb-6 h-48 overflow-hidden relative">
                    <Image
                      src="/images/hero/feature-coffee.jpg"
                      alt="Value 2"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">
                    정성과 품질
                  </h3>
                  <p className="korean-sans text-korean-light leading-relaxed">
                    최고 품질의 원재료와 정성스러운 
                    손길로 만드는 모든 메뉴
                  </p>
                </div>

                <div className="calm-card p-8 rounded-2xl text-center">
                  <div className="rounded-xl mb-6 h-48 overflow-hidden relative">
                    <Image
                      src="/images/hero/feature-nature.jpg"
                      alt="Value 3"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent mb-4">
                    따뜻한 환대
                  </h3>
                  <p className="korean-sans text-korean-light leading-relaxed">
                    모든 손님을 가족처럼 맞이하는
                    진심 어린 환대의 정신
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="korean-section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  우리의 공간
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  바람꽃 카페의 아름다운 순간들
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="calm-card rounded-2xl overflow-hidden">
                    <div className="relative h-80">
                      <Image
                        src={`/images/gallery/FV${i}.png`}
                        alt={`Wind Flower Café Space ${i}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="korean-section-spacing bg-korean-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  Meet Our Team
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  바람꽃 카페를 만들어가는 사람들
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="calm-card p-8 rounded-2xl">
                  <div className="rounded-xl mb-6 h-96 overflow-hidden relative">
                    <Image
                      src="/images/hero/owner1.png"
                      alt="Owner Portrait"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent mb-2">
                    김바람 Kim Baram
                  </h3>
                  <p className="korean-sans text-korean-light text-sm mb-4 opacity-80">
                    Owner & Head Barista
                  </p>
                  <p className="korean-sans text-korean-light leading-relaxed">
                    커피를 사랑하는 마음으로 시작된 여행이 
                    부안에서 새로운 시작을 맞이했습니다. 
                    매일 정성스럽게 내리는 커피 한 잔에 
                    마음을 담아 전해드립니다.
                  </p>
                </div>

                <div className="calm-card p-8 rounded-2xl">
                  <div className="rounded-xl mb-6 h-96 overflow-hidden relative">
                    <Image
                      src="/images/hero/owner2.png"
                      alt="Baker Portrait"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent mb-2">
                    이꽃님 Lee Kkotnim
                  </h3>
                  <p className="korean-sans text-korean-light text-sm mb-4 opacity-80">
                    Pastry Chef
                  </p>
                  <p className="korean-sans text-korean-light leading-relaxed">
                    건강한 재료로 만드는 수제 디저트가 
                    자랑입니다. 계절마다 바뀌는 특별한 
                    메뉴로 방문객들에게 작은 기쁨을 
                    선사하고 싶습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
