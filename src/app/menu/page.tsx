import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

export default function Menu() {
  const coffeeItems = [
    {
      name: "美式咖啡",
      price: "¥25",
      description: "经典美式咖啡，浓郁香醇",
      image: "☕"
    },
    {
      name: "拿铁咖啡",
      price: "¥35",
      description: "香滑牛奶与浓缩咖啡的完美结合",
      image: "🥛"
    },
    {
      name: "卡布奇诺",
      price: "¥30",
      description: "奶泡丰富，口感层次分明",
      image: "☕"
    },
    {
      name: "摩卡咖啡",
      price: "¥40",
      description: "巧克力与咖啡的甜蜜邂逅",
      image: "🍫"
    },
    {
      name: "焦糖玛奇朵",
      price: "¥38",
      description: "香甜焦糖配上浓郁咖啡",
      image: "🍯"
    },
    {
      name: "手冲精品咖啡",
      price: "¥55",
      description: "精选单品豆，手工冲泡",
      image: "☕"
    }
  ];

  const pastries = [
    {
      name: "牛角包",
      price: "¥15",
      description: "法式经典，酥脆香甜",
      image: "🥐"
    },
    {
      name: "蓝莓玛芬",
      price: "¥20",
      description: "新鲜蓝莓，松软香甜",
      image: "🧁"
    },
    {
      name: "芝士蛋糕",
      price: "¥28",
      description: "浓郁芝士，入口即化",
      image: "🍰"
    },
    {
      name: "提拉米苏",
      price: "¥32",
      description: "意式经典甜品",
      image: "🍮"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 coffee-text-shadow">我们的菜单</h1>
          <p className="text-xl text-amber-700">精心挑选的咖啡和糕点</p>
        </div>

        {/* Coffee Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">咖啡类</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item, index) => (
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

        {/* Pastries Section */}
        <section>
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">糕点类</h2>
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
