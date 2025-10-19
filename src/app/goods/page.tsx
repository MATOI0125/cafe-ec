import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";

export default function Goods() {
  const goods = [
    {
      id: 'tumbler-1',
      name: '바람꽃 텀블러',
      nameEn: 'Wind Flower Tumbler',
      price: 28900,
      description: '친환경 소재로 제작된 카페 전용 텀블러',
      descriptionEn: 'Eco-friendly tumbler exclusive to our café',
      category: 'drinkware'
    },
    {
      id: 'coffee-beans-1',
      name: '시그니처 원두',
      nameEn: 'Signature Coffee Beans',
      price: 24000,
      description: '카페에서 직접 로스팅한 프리미엄 원두 (200g)',
      descriptionEn: 'Premium coffee beans roasted in-house (200g)',
      category: 'coffee'
    },
    {
      id: 'mug-1',
      name: '핸드메이드 머그컵',
      nameEn: 'Handmade Ceramic Mug',
      price: 18000,
      description: '지역 도예가가 만든 수제 도자기 머그컵',
      descriptionEn: 'Handcrafted ceramic mug by local artisan',
      category: 'drinkware'
    },
    {
      id: 'cookies-1',
      name: '홈메이드 쿠키 세트',
      nameEn: 'Homemade Cookie Set',
      price: 15000,
      description: '카페에서 매일 구워내는 수제 쿠키 (6개입)',
      descriptionEn: 'Daily baked homemade cookies (6 pieces)',
      category: 'sweets'
    },
    {
      id: 'tote-bag-1',
      name: '에코백',
      nameEn: 'Eco Tote Bag',
      price: 12000,
      description: '친환경 소재의 카페 로고 에코백',
      descriptionEn: 'Eco-friendly tote bag with café logo',
      category: 'accessories'
    },
    {
      id: 'tea-set-1',
      name: '전통차 세트',
      nameEn: 'Traditional Tea Set',
      price: 32000,
      description: '한국 전통차와 찻잔이 포함된 세트',
      descriptionEn: 'Korean traditional tea set with teacup',
      category: 'tea'
    }
  ];

  const categories = [
    { id: 'all', name: '전체', nameEn: 'All' },
    { id: 'drinkware', name: '드링크웨어', nameEn: 'Drinkware' },
    { id: 'coffee', name: '원두/차', nameEn: 'Coffee & Tea' },
    { id: 'sweets', name: '디저트', nameEn: 'Sweets' },
    { id: 'accessories', name: '액세서리', nameEn: 'Accessories' }
  ];

  return (
    <div className="min-h-screen korean-calm">
      <Navigation />

      <div className="pt-24 pb-16 korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 페이지 헤더 */}
            <div className="text-center mb-16 gentle-fade-in">
              <h1 className="text-4xl md:text-5xl korean-serif font-light text-korean-accent mb-4 korean-text-shadow">
                Goods
              </h1>
              <p className="text-xl korean-sans text-korean-light mb-2">
                굿즈
              </p>
              <p className="korean-sans text-korean-light max-w-2xl mx-auto leading-relaxed">
                바람꽃 카페의 특별한 굿즈들을 만나보세요<br/>
                <span className="text-sm opacity-80">Discover our special café merchandise and take-home items</span>
              </p>
            </div>

            {/* 카테고리 필터 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 gentle-fade-in">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-6 py-2 korean-sans text-sm border border-korean-accent text-korean-accent hover:bg-korean-accent hover:text-white transition-all duration-300 rounded-full"
                >
                  {category.name}
                  <span className="block text-xs opacity-70">{category.nameEn}</span>
                </button>
              ))}
            </div>

            {/* 상품 그리드 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gentle-fade-in">
              {goods.map((item, index) => (
                <div 
                  key={item.id}
                  className="korean-card p-6 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* 상품 이미지 플레이스홀더 */}
                  <div className="image-placeholder rounded-2xl mb-4 h-64">
                    <div className="text-center">
                      <p className="text-lg mb-2">📦 {item.name}</p>
                      <p className="text-sm opacity-70">{item.nameEn}</p>
                      <p className="text-xs mt-2 opacity-50">500x500 recommended</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl korean-serif font-medium text-korean-accent mb-2">
                      {item.name}
                    </h3>
                    <p className="korean-sans text-korean-light text-sm mb-3 opacity-80">
                      {item.nameEn}
                    </p>
                    <p className="korean-sans text-korean-light text-sm mb-4 leading-relaxed">
                      {item.description}
                      <br/>
                      <span className="text-xs opacity-70">{item.descriptionEn}</span>
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl korean-serif font-medium text-korean-accent">
                        ₩{item.price.toLocaleString()}
                      </span>
                      <AddToCartButton 
                        item={{
                          name: item.name,
                          price: `₩${item.price.toLocaleString()}`,
                          image: `/goods/${item.id}.jpg`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 배송 정보 */}
            <div className="mt-16 korean-card p-8 text-center gentle-fade-in">
              <h3 className="text-2xl korean-serif font-medium text-korean-accent mb-6">
                배송 안내 / Shipping Information
              </h3>
              <div className="grid md:grid-cols-3 gap-8 korean-sans text-korean-light">
                <div>
                  <div className="text-3xl mb-3">🚚</div>
                  <h4 className="font-medium mb-2">무료배송</h4>
                  <p className="text-sm opacity-80">30,000원 이상 구매시</p>
                  <p className="text-xs opacity-60">Free shipping over ₩30,000</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">📦</div>
                  <h4 className="font-medium mb-2">당일발송</h4>
                  <p className="text-sm opacity-80">오후 2시 이전 주문시</p>
                  <p className="text-xs opacity-60">Same day shipping before 2PM</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">💝</div>
                  <h4 className="font-medium mb-2">선물포장</h4>
                  <p className="text-sm opacity-80">무료 선물포장 서비스</p>
                  <p className="text-xs opacity-60">Free gift wrapping service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}