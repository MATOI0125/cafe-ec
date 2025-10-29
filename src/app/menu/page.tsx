import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

export default function Menu() {
  const coffeeItems = [
    {
      id: "coffee-1",
      name: "아메리카노",
      price: 3500,
      description: "진한 에스프레소와 물의 조화, 기본 커피",
      image: "☕"
    },
    {
      id: "coffee-2",
      name: "카페라떼",
      price: 4000,
      description: "부드러운 우유와 에스프레소의 만남",
      image: "🥛"
    },
    {
      id: "coffee-3",
      name: "카푸치노",
      price: 4000,
      description: "풍성한 우유 거품과 진한 커피",
      image: "☕"
    },
    {
      id: "coffee-4",
      name: "모카",
      price: 4500,
      description: "초콜릿과 커피의 달콤한 조화",
      image: "🍫"
    },
    {
      id: "coffee-5",
      name: "카라멜 마키아또",
      price: 4500,
      description: "달콤한 카라멜과 진한 커피",
      image: "🍯"
    },
    {
      id: "coffee-6",
      name: "핸드드립 커피",
      price: 5000,
      description: "엄선된 원두로 직접 내린 커피",
      image: "☕"
    }
  ];

  const pastries = [
    {
      id: "pastry-1",
      name: "크루아상",
      price: 2500,
      description: "프랑스식 바삭하고 고소한 빵",
      image: "🥐"
    },
    {
      id: "pastry-2",
      name: "블루베리 머핀",
      price: 3000,
      description: "신선한 블루베리가 가득한 머핀",
      image: "🧁"
    },
    {
      id: "pastry-3",
      name: "치즈케이크",
      price: 3500,
      description: "진한 치즈의 풍미, 부드러운 케이크",
      image: "🍰"
    },
    {
      id: "pastry-4",
      name: "티라미수",
      price: 3800,
      description: "이탈리아 정통 디저트, 달콤한 맛",
      image: "🍮"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 coffee-text-shadow">메뉴</h1>
          <p className="text-xl text-amber-700">정성스럽게 준비한 커피와 디저트</p>
        </div>

        {/* Coffee Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">커피</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item, index) => (
              <div key={index} className="coffee-card bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-center mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-700 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">₩{item.price.toLocaleString()}</span>
                  <AddToCartButton item={item} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pastries Section */}
        <section>
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">디저트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastries.map((item, index) => (
              <div key={index} className="coffee-card bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl text-center mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-700 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                  <AddToCartButton item={item} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
