import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

export default function Dessert() {
  const dessertMenus = [
    {
      category: "Handmade Cakes",
      categoryKr: "수제 케이크",
      items: [
        {
          name: "Honey Castella",
          nameKr: "허니 카스테라",
          price: "₩ 4,500",
          description: "부안산 꿀로 만든 촉촉하고 달콤한 카스테라",
          image: "🍰"
        },
        {
          name: "Matcha Cheesecake", 
          nameKr: "말차 치즈케이크",
          price: "₩ 5,500",
          description: "진한 말차와 부드러운 크림치즈의 조화",
          image: "🍵"
        },
        {
          name: "Carrot Cake",
          nameKr: "당근 케이크",
          price: "₩ 5,000",
          description: "건강한 당근과 견과류로 만든 촉촉한 케이크",
          image: "🥕"
        },
        {
          name: "Lemon Tart",
          nameKr: "레몬 타르트",
          price: "₩ 4,800",
          description: "상큼한 레몬 커드와 바삭한 타르트의 만남",
          image: "🍋"
        }
      ]
    },
    {
      category: "Traditional Korean",
      categoryKr: "전통 한과",
      items: [
        {
          name: "Injeolmi Toast",
          nameKr: "인절미 토스트",
          price: "₩ 3,800",
          description: "고소한 인절미와 부드러운 식빵의 특별한 조합",
          image: "🍞"
        },
        {
          name: "Sweet Rice Cake",
          nameKr: "찹쌀떡",
          price: "₩ 3,500",
          description: "전통 방식으로 만든 쫄깃한 찹쌀떡",
          image: "🍡"
        },
        {
          name: "Honey Yakgwa",
          nameKr: "꿀 약과",
          price: "₩ 4,000",
          description: "부안산 꿀로 만든 달콤한 전통 약과",
          image: "🍯"
        }
      ]
    },
    {
      category: "Seasonal Specials",
      categoryKr: "계절 한정",
      items: [
        {
          name: "Autumn Persimmon Cake",
          nameKr: "가을 감 케이크",
          price: "₩ 5,200",
          description: "부안산 단감으로 만든 가을 한정 케이크",
          image: "🟠"
        },
        {
          name: "Sweet Potato Latte Cake",
          nameKr: "고구마 라떼 케이크",
          price: "₩ 4,800",
          description: "고소한 고구마와 라떼의 완벽한 조화",
          image: "🍠"
        }
      ]
    },
    {
      category: "Ice Cream & Cold",
      categoryKr: "아이스크림 & 차가운 디저트",
      items: [
        {
          name: "Vanilla Bean Gelato",
          nameKr: "바닐라빈 젤라또",
          price: "₩ 4,200",
          description: "진짜 바닐라빈으로 만든 진한 젤라또",
          image: "🍦"
        },
        {
          name: "Bingsu",
          nameKr: "팥빙수",
          price: "₩ 7,500",
          description: "전통 팥과 우유 얼음의 시원한 만남",
          image: "🧊"
        },
        {
          name: "Fruit Sorbet",
          nameKr: "과일 셔벗",
          price: "₩ 4,000",
          description: "계절 과일로 만든 상큼한 셔벗",
          image: "🍓"
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
                  Dessert
                </h1>
                <p className="text-xl korean-sans text-korean-light mb-8">
                  정성으로 만든 수제 디저트
                </p>
              </div>

              {/* Featured Dessert */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl korean-serif font-medium text-korean-accent mb-6">
                    매일 새롭게
                  </h2>
                  <div className="korean-sans text-korean-light leading-relaxed space-y-4">
                    <p>
                      바람꽃 카페의 모든 디저트는 매일 아침 신선한 재료로 
                      정성스럽게 만들어집니다.
                    </p>
                    <p>
                      부안 지역의 신선한 농산물과 전통적인 제조 방식을 
                      현대적으로 재해석하여 건강하고 맛있는 디저트를 선보입니다.
                    </p>
                    <p>
                      계절마다 바뀌는 특별한 메뉴로 방문할 때마다 
                      새로운 맛의 경험을 선사합니다.
                    </p>
                  </div>
                </div>
                <div className="image-placeholder rounded-3xl h-[400px]">
                  <div className="text-center">
                    <p className="text-lg mb-2">📸 Featured Dessert</p>
                    <p className="text-sm opacity-70">수제 디저트 제작 과정</p>
                    <p className="text-xs mt-2 opacity-50">Baking process or final product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dessert Menu */}
        <section className="korean-section-spacing bg-korean-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {dessertMenus.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16 last:mb-0">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl korean-serif font-medium text-korean-accent mb-2">
                      {category.category}
                    </h2>
                    <p className="korean-sans text-korean-light text-lg">
                      {category.categoryKr}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, index) => (
                      <div key={index} className="calm-card p-6 rounded-2xl">
                        <div className="text-center mb-4">
                          <div className="text-5xl mb-4 soft-pulse">
                            {item.image}
                          </div>
                          <h3 className="text-lg korean-serif font-medium text-korean-accent mb-1">
                            {item.name}
                          </h3>
                          <p className="korean-sans text-korean-light text-sm mb-3">
                            {item.nameKr}
                          </p>
                          <p className="korean-sans text-korean-light text-sm leading-relaxed mb-4">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-korean-accent">
                            {item.price}
                          </span>
                          <AddToCartButton item={item} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="korean-section-spacing">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  Premium Ingredients
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  최고의 재료로 만드는 특별한 맛
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { title: "Local Honey", titleKr: "부안산 꿀", desc: "지역 양봉농가의 순수 꿀" },
                  { title: "Organic Flour", titleKr: "유기농 밀가루", desc: "국산 유기농 밀가루" },
                  { title: "Farm Fresh Eggs", titleKr: "농장 계란", desc: "신선한 방목 계란" },
                  { title: "Seasonal Fruits", titleKr: "계절 과일", desc: "부안 지역 신선한 과일" }
                ].map((ingredient, index) => (
                  <div key={index} className="text-center">
                    <div className="image-placeholder rounded-2xl mb-6 h-48">
                      <div className="text-center">
                        <p className="text-sm">📸 {ingredient.title}</p>
                        <p className="text-xs opacity-70">{ingredient.titleKr}</p>
                      </div>
                    </div>
                    <h3 className="text-lg korean-serif font-medium text-korean-accent mb-2">
                      {ingredient.title}
                    </h3>
                    <p className="korean-sans text-korean-light text-sm mb-2">
                      {ingredient.titleKr}
                    </p>
                    <p className="korean-sans text-korean-light text-xs">
                      {ingredient.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Making Process */}
        <section className="korean-section-spacing bg-korean-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl korean-serif font-light text-korean-accent mb-4">
                  Our Baking Process
                </h2>
                <p className="korean-sans text-korean-light text-lg">
                  정성스러운 제작 과정
                </p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    step: "1", 
                    title: "재료 준비",
                    desc: "매일 아침 신선한 재료들을 정성스럽게 준비합니다"
                  },
                  {
                    step: "2",
                    title: "반죽과 준비", 
                    desc: "전통적인 방법과 현대적 기법을 조화롭게 사용합니다"
                  },
                  {
                    step: "3",
                    title: "굽기와 완성",
                    desc: "최적의 온도와 시간으로 완벽하게 구워냅니다"
                  }
                ].map((process, index) => (
                  <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <div className="image-placeholder rounded-2xl h-64">
                        <div className="text-center">
                          <p className="text-sm">📸 Process {process.step}</p>
                          <p className="text-xs opacity-70">{process.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "md:order-1" : ""}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-korean-accent text-white rounded-full flex items-center justify-center korean-sans font-bold mr-4">
                          {process.step}
                        </div>
                        <h3 className="text-2xl korean-serif font-medium text-korean-accent">
                          {process.title}
                        </h3>
                      </div>
                      <p className="korean-sans text-korean-light leading-relaxed">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
