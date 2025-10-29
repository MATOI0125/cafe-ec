"use client";
"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

// 商品详情数据可通过接口或静态数据获取，这里用静态示例
const productData = {
  b1: {
    id: "b1",
    title: "시그니처 원두 (200g)",
    titleEn: "Signature Beans",
    price: 24000,
    image: "/images/goods/coffee-beans-1.png",
    desc: "부안의 자연에서 로스팅한 시그니처 원두. 깊고 풍부한 향미.",
    inStock: true,
    online: true,
  },
  b2: {
    id: "b2",
    title: "하우스 블렌드 (200g)",
    titleEn: "House Blend",
    price: 22000,
    image: "/images/goods/coffee-beans-2.png",
    desc: "부드럽고 균형 잡힌 하우스 블렌드. 일상에 어울리는 맛.",
    inStock: true,
    online: false,
  },
  s1: {
    id: "s1",
    title: "허니 카스테라",
    titleEn: "Honey Castella",
    price: 4500,
    image: "/images/goods/castella.png",
    desc: "달콤한 꿀이 들어간 촉촉한 카스테라.",
    inStock: true,
    online: true,
  },
  s2: {
    id: "s2",
    title: "홈메이드 쿠키 세트",
    titleEn: "Cookie Set",
    price: 15000,
    image: "/images/goods/cookie-set.png",
    desc: "직접 구운 다양한 쿠키 세트. 선물용으로도 추천.",
    inStock: false,
    online: true,
  },
  g1: {
    id: "g1",
    title: "바람꽃 텀블러",
    titleEn: "Wind Flower Tumbler",
    price: 28900,
    image: "/images/goods/tumbler.png",
    desc: "카페 로고가 새겨진 텀블러. 환경을 생각하는 선택.",
    inStock: true,
    online: true,
  },
  g2: {
    id: "g2",
    title: "에코백",
    titleEn: "Eco Tote Bag",
    price: 12000,
    image: "/images/goods/bag.png",
    desc: "실용적이고 튼튼한 에코백. 일상에 포인트를 더하세요.",
    inStock: true,
    online: false,
  },
};

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const { id } = use(params);
  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen korean-calm">
        <Navigation />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl text-korean-accent mb-4">상품을 찾을 수 없습니다</h1>
          <button onClick={() => router.back()} className="korean-button px-6 py-2 text-white rounded-full">뒤로가기</button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen korean-calm">
      <Navigation />
      <main className="container mx-auto px-4 flex flex-col justify-center min-h-[70vh]">
        <div className="bg-white rounded-3xl shadow-lg p-8 grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* 商品图片 */}
          <div className="relative w-full aspect-[3/4] h-88 rounded-2xl overflow-hidden bg-korean-light/10">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* 商品信息 */}
          <div>
            <h1 className="text-3xl md:text-4xl korean-serif text-korean-accent font-light mb-2">{product.title}</h1>
            <p className="korean-sans text-korean-light mb-4 text-lg">{product.titleEn}</p>
            <div className="text-xl korean-serif mb-2">₩{product.price.toLocaleString()}</div>
            <div className="text-xs text-korean-light/70 mb-4">{product.inStock ? '재고 있음' : '품절'} {product.online && <span className="ml-2 px-2 py-1 text-xs bg-korean-warm rounded-full korean-sans">온라인</span>}</div>
            <p className="korean-sans text-korean-light mb-6 leading-relaxed">{product.desc}</p>
            <div className="flex items-center space-x-4 mb-6">
              <label htmlFor="qty" className="korean-sans text-sm">수량</label>
              <select
                id="qty"
                value={qty}
                onChange={e => setQty(Number(e.target.value))}
                className="border rounded px-2 py-1"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
            <button
              className="korean-button px-8 py-3 rounded-full text-white korean-sans font-medium text-lg"
              disabled={!product.inStock}
              onClick={() => addItem({ id: product.id, name: product.title, price: product.price, image: product.image }, qty)}
            >
              장바구니에 담기
            </button>
          </div>
        </div>
        {/* 商品描述区 */}
        <div className="max-w-4xl mx-auto mt-16 bg-korean-warm rounded-2xl p-8">
          <h2 className="text-2xl korean-serif text-korean-accent mb-4">상품 설명</h2>
          <p className="korean-sans text-korean-light leading-relaxed text-lg">{product.desc}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
