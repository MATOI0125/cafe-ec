import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

export default function Coffee() {
  const coffeeMenus = [
    {
      category: "Espresso Base",
      categoryKr: "에스프레소 베이스",
      items: [
        {
          name: "Americano",
          nameKr: "아메리카노",
          price: "₩ 4,500",
          description: "깔끔하고 진한 에스프레소의 본연의 맛",
          image: "☕"
        },
        {
          name: "Café Latte",
          nameKr: "카페 라떼", 
          price: "₩ 5,500",
          description: "부드러운 우유와 에스프레소의 완벽한 조화",
          image: "🥛"
        },
        {
          name: "Cappuccino",
          nameKr: "카푸치노",
          price: "₩ 5,500", 
          description: "풍성한 거품과 진한 커피의 만남",
          image: "☕"
        },
        {
          name: "Flat White",
          nameKr: "플랫 화이트",
          price: "₩ 6,000",
          description: "진한 에스프레소와 벨벳같은 마이크로폼",
          image: "🤍"
        }
      ]
    },
    {
      category: "Specialty Coffee",
      categoryKr: "스페셜티 커피",
      items: [
        {
          name: "Wind Flower Blend",
          nameKr: "바람꽃 블렌드",
          price: "₩ 6,500",
          description: "카페만의 시그니처 블렌드, 부안의 자연을 담은 맛",
          image: "🌸"
        },
        {
          name: "Hand Drip Coffee",
          nameKr: "핸드드립 커피",
          price: "₩ 7,000",
          description: "바리스타가 정성스럽게 내린 싱글 오리진",
          image: "💧"
        },
        {
          name: "Cold Brew",
          nameKr: "콜드브루",
          price: "₩ 5,500",
          description: "16시간 저온 추출한 부드럽고 깊은 맛",
          image: "🧊"
        },
        {
          name: "Affogato",
          nameKr: "아포가토",
          price: "₩ 6,500",
          description: "바닐라 아이스크림 위에 부은 진한 에스프레소",
          image: "🍦"
        }
      ]
    },
    {
      category: "Seasonal Menu",
      categoryKr: "계절 메뉴",
      items: [
        {
          name: "Autumn Spice Latte",
          nameKr: "가을 스파이스 라떼",
          price: "₩ 6,000",
          description: "계피와 넛멕의 따뜻한 향이 어우러진 가을 한정 메뉴",
          image: "🍂"
        },
        {
          name: "Jeju Green Tea Latte",
          nameKr: "제주 녹차 라떼",
          price: "₩ 5,800",
          description: "제주산 유기농 녹차로 만든 건강한 라떼",
          image: "🍵"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen korean-calm">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="korean-section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 gentle-fade-in">
                <h1 className="text-4xl md:text-5xl korean-serif font-light text-korean-accent mb-6">
                  Coffee
                </h1>
                <p className="text-xl korean-sans text-korean-light mb-8">
                  정성스럽게 내린 바람꽃 카페의 커피
                </p>
              </div>

              {/* Featured Coffee */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="image-placeholder rounded-3xl h-[400px]">
                  <div className="text-center">
                    <p className="text-lg mb-2">📸 Featured Coffee</p>
                    <p className="text-sm opacity-70">바리스타가 커피를 내리는 모습</p>
                    <p className="text-xs mt-2 opacity-50">Perfect for hero image</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl korean-serif font-medium text-korean-accent mb-6">
                    매일 신선하게
                  </h2>
                  <div className="korean-sans text-korean-light leading-relaxed space-y-4">
                    <p>
                      바람꽃 카페의 모든 커피는 매일 아침 신선하게 로스팅한 
                      원두로 정성스럽게 내려집니다.
                    </p>
                    <p>
                      세계 각지의 우수한 농장에서 직접 수입한 스페셜티 그레이드 
                      원두만을 사용하여 풍부하고 깊은 맛을 선사합니다.
                    </p>
                    <p>
                      각각의 원두가 가진 고유한 특성을 살려 추출하는 
                      바리스타의 정성이 한 잔에 담겨 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Menu */}
        <section className="korean-section-spacing bg-korean-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {coffeeMenus.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16 last:mb-0">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl korean-serif font-medium text-korean-accent mb-2">
                      {category.category}
                    </h2>
                    <p className="korean-sans text-korean-light text-lg">
                      {category.categoryKr}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {category.items.map((item, index) => (
                      <div key={index} className="calm-card p-8 rounded-2xl">
                        <div className="flex items-start space-x-6">
                          <div className="text-4xl soft-pulse">
                            {item.image}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="text-xl korean-serif font-medium text-korean-accent">
                                  {item.name}
                                </h3>
                                <p className="korean-sans text-korean-light text-sm">
                                  {item.nameKr}
                                </p>
                              </div>
                              <span className="text-xl font-bold text-korean-accent">
                                {item.price}
                              </span>
                            </div>
                            <p className="korean-sans text-korean-light text-sm leading-relaxed mb-4">
                              {item.description}
                            </p>
                            <AddToCartButton item={item} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coffee Process */}
        <section className="korean-section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  Our Process
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  완벽한 한 잔을 위한 과정
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Selection", titleKr: "선별", desc: "최고 품질의 원두 선별" },
                  { title: "Roasting", titleKr: "로스팅", desc: "매일 신선한 로스팅" },
                  { title: "Grinding", titleKr: "그라인딩", desc: "주문 시 즉석 분쇄" },
                  { title: "Brewing", titleKr: "추출", desc: "정성스러운 커피 추출" }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="image-placeholder rounded-2xl mb-6 h-48">
                      <div className="text-center">
                        <p className="text-sm">📸 Step {index + 1}</p>
                        <p className="text-xs opacity-70">{step.title}</p>
                      </div>
                    </div>
                    <h3 className="text-lg korean-serif font-medium text-korean-accent mb-2">
                      {step.title}
                    </h3>
                    <p className="korean-sans text-korean-light text-sm mb-2">
                      {step.titleKr}
                    </p>
                    <p className="korean-sans text-korean-light text-xs">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Origin Stories */}
        <section className="korean-section-spacing bg-korean-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  Origin Stories
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  우리가 사용하는 원두들의 이야기
                </p>
              </div>

              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="image-placeholder rounded-2xl h-64">
                    <div className="text-center">
                      <p className="text-sm">📸 Ethiopia Origin</p>
                      <p className="text-xs opacity-70">에티오피아 농장</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl korean-serif font-medium text-korean-accent mb-4">
                      Ethiopia Yirgacheffe
                    </h3>
                    <p className="korean-sans text-korean-light leading-relaxed">
                      커피의 원산지 에티오피아의 이르가체페 지역에서 온 원두입니다. 
                      꽃향기와 과일의 산미가 특징인 이 커피는 아프리카 고원의 
                      깨끗한 공기와 비옥한 토양에서 자란 최고급 아라비카입니다.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 image-placeholder rounded-2xl h-64">
                    <div className="text-center">
                      <p className="text-sm">📸 Colombia Origin</p>
                      <p className="text-xs opacity-70">콜롬비아 농장</p>
                    </div>
                  </div>
                  <div className="md:order-1">
                    <h3 className="text-2xl korean-serif font-medium text-korean-accent mb-4">
                      Colombia Huila
                    </h3>
                    <p className="korean-sans text-korean-light leading-relaxed">
                      콜롬비아 우일라 지역의 소규모 농장에서 정성스럽게 재배된 원두입니다. 
                      균형 잡힌 단맛과 부드러운 산미, 깔끔한 후미가 특징으로 
                      많은 사랑을 받고 있는 우리 카페의 대표 원두입니다.
                    </p>
                  </div>
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
