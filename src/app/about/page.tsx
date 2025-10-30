import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const teamMembers = [
    {
      name: "李大师",
      role: "首席咖啡师",
      description: "拥有15年咖啡制作经验，曾在多个国际咖啡比赛中获奖。对咖啡有着近乎完美的追求，致力于为每位顾客制作最佳口感的咖啡。",
      emoji: "👨‍🍳"
    },
    {
      name: "王经理",
      role: "店长",
      description: "热情友好的服务专家，始终以顾客满意为第一要务。负责店铺日常运营，确保每位顾客都能享受到优质的服务体验。",
      emoji: "👩‍💼"
    },
    {
      name: "小张",
      role: "烘焙师",
      description: "专业烘焙师，每日新鲜制作各种糕点和轻食，用心为顾客提供美味的配餐选择。",
      emoji: "👩‍🍳"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />

      <main className="nav-offset container mx-auto px-4 pb-16">
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-4xl font-bold text-amber-900 mb-4 coffee-text-shadow">关于咖啡小屋</h1>
          <p className="text-xl text-amber-700">我们的故事和理念</p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="coffee-card bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">我们的故事</h2>
            <div className="text-amber-700 space-y-4 text-lg leading-relaxed">
              <p>
                咖啡小屋成立于2020年，源于对咖啡的纯粹热爱。我们的创始人在世界各地旅行时，
                品尝了无数杯不同风味的咖啡，最终决定在这里开设一家属于自己的咖啡店。
              </p>
              <p>
                我们坚信每一杯咖啡都应该是一次独特的体验。从精心挑选的咖啡豆到专业的烘焙工艺，
                从精湛的冲泡技术到温馨的服务，我们把每一个细节都做到极致。
              </p>
              <p>
                在这里，您不仅可以品尝到世界级的咖啡，还能感受到家一般的温暖。
                咖啡小屋不仅是一家咖啡店，更是一个让人放松身心、享受生活的美好空间。
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">我们的理念</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="coffee-card bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 coffee-pulse">🌱</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">可持续发展</h3>
              <p className="text-amber-700">
                我们与咖啡农直接合作，确保公平贸易，支持可持续农业发展，
                保护环境的同时为农民提供合理收入。
              </p>
            </div>
            <div className="coffee-card bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 coffee-pulse">❤️</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">用心服务</h3>
              <p className="text-amber-700">
                每一位顾客都是我们的朋友，我们用心聆听每个人的需求，
                为您提供个性化的咖啡体验和贴心服务。
              </p>
            </div>
            <div className="coffee-card bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4 coffee-pulse">🎯</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">品质至上</h3>
              <p className="text-amber-700">
                从原料采购到制作工艺，我们对品质绝不妥协。
                每一杯咖啡都经过严格的品质控制，确保完美口感。
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">我们的团队</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="coffee-card bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">{member.emoji}</div>
                  <h3 className="text-xl font-semibold text-amber-900">{member.name}</h3>
                  <p className="text-amber-600 font-medium">{member.role}</p>
                </div>
                <p className="text-amber-700 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-amber-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">联系我们</h2>
            <div className="grid md:grid-cols-3 gap-6 text-lg">
              <div>
                <h3 className="font-semibold mb-2">📍 地址</h3>
                <p>上海市静安区南京西路123号</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">📞 电话</h3>
                <p>021-1234-5678</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🕒 营业时间</h3>
                <p>周一至周日 7:00-22:00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
