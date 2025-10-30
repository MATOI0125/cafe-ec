'use client';
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { CartProvider } from "@/context/CartContext";
import AddToCartButton from "@/components/AddToCartButton";

export default function Shop() {
  // 筛选状态
  const [category, setCategory] = useState<'all' | 'coffee' | 'snack' | 'goods'>('all');
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // 상품 데이터 (예시)
  const items = [
  { id: 'b1', title: '시그니처 원두 (200g)', titleEn: 'Signature Beans', category: 'coffee', price: 24000, image: '/images/goods/coffee-beans-1.png', online: true, inStock: true },
  { id: 'b2', title: '하우스 블렌드 (200g)', titleEn: 'House Blend', category: 'coffee', price: 22000, image: '/images/goods/coffee-beans-2.png', online: false, inStock: true },
  { id: 's1', title: '허니 카스테라', titleEn: 'Honey Castella', category: 'snack', price: 4500, image: '/images/goods/castella.png', online: true, inStock: true },
  { id: 's2', title: '홈메이드 쿠키 세트', titleEn: 'Cookie Set', category: 'snack', price: 15000, image: '/images/goods/cookie-set.png', online: true, inStock: false },
  { id: 'g1', title: '바람꽃 텀블러', titleEn: 'Wind Flower Tumbler', category: 'goods', price: 28900, image: '/images/goods/tumbler.png', online: true, inStock: true },
  { id: 'g2', title: '에코백', titleEn: 'Eco Tote Bag', category: 'goods', price: 12000, image: '/images/goods/bag.png', online: false, inStock: true }
  ];

  // 필터링 로직
  const filtered = items.filter(item => {
    if (category !== 'all' && item.category !== category) return false;
    if (onlineOnly && !item.online) return false;
    if (inStockOnly && !item.inStock) return false;
    return true;
  });

  return (
    <CartProvider>
      <div className="min-h-screen korean-calm">
        <Navigation />

        <main className="nav-offset pb-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl korean-serif text-korean-accent font-light">상점</h1>
                <p className="korean-sans text-korean-light">원두 · 간식 · 굿즈 — 바람꽃 카페 셀렉션</p>
              </div>

              {/* 移动端打开过滤 */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden px-4 py-2 border rounded-md korean-sans"
              >
                필터 열기
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {/* 侧栏（col-span 1） */}
              <aside className="hidden md:block">
                <div className="sticky top-28">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium korean-sans text-korean-accent mb-2">카테고리</h3>
                    <div className="space-y-2">
                      <label className={`flex items-center space-x-2 p-2 rounded ${category === 'all' ? 'bg-korean-warm/40' : ''}`}>
                        <input type="radio" name="cat" checked={category === 'all'} onChange={() => setCategory('all')} />
                        <span className="korean-sans">전체</span>
                        <span className="text-xs text-korean-light/70 ml-auto">All</span>
                      </label>
                      <label className={`flex items-center space-x-2 p-2 rounded ${category === 'coffee' ? 'bg-korean-warm/40' : ''}`}>
                        <input type="radio" name="cat" checked={category === 'coffee'} onChange={() => setCategory('coffee')} />
                        <span className="korean-sans">원두</span>
                        <span className="text-xs text-korean-light/70 ml-auto">Coffee Beans</span>
                      </label>
                      <label className={`flex items-center space-x-2 p-2 rounded ${category === 'snack' ? 'bg-korean-warm/40' : ''}`}>
                        <input type="radio" name="cat" checked={category === 'snack'} onChange={() => setCategory('snack')} />
                        <span className="korean-sans">간식</span>
                        <span className="text-xs text-korean-light/70 ml-auto">Snacks</span>
                      </label>
                      <label className={`flex items-center space-x-2 p-2 rounded ${category === 'goods' ? 'bg-korean-warm/40' : ''}`}>
                        <input type="radio" name="cat" checked={category === 'goods'} onChange={() => setCategory('goods')} />
                        <span className="korean-sans">굿즈</span>
                        <span className="text-xs text-korean-light/70 ml-auto">Goods</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-medium korean-sans text-korean-accent mb-2">필터</h3>
                    <label className="flex items-center space-x-3 p-2">
                      <input type="checkbox" checked={onlineOnly} onChange={() => setOnlineOnly(v => !v)} />
                      <span className="korean-sans">온라인 전용</span>
                    </label>
                    <label className="flex items-center space-x-3 p-2">
                      <input type="checkbox" checked={inStockOnly} onChange={() => setInStockOnly(v => !v)} />
                      <span className="korean-sans">재고 있음</span>
                    </label>
                  </div>

                  <div>
                    <button onClick={() => { setCategory('all'); setOnlineOnly(false); setInStockOnly(false); }} className="px-3 py-2 border rounded korean-sans text-sm">
                      필터 초기화
                    </button>
                  </div>
                </div>
              </aside>

              {/* 商品区（col-span 3） */}
              <section className="md:col-span-3">
                {/* 移动端筛选弹窗 */}
                {mobileFiltersOpen && (
                  <div className="fixed inset-0 z-40 bg-black/40 flex">
                    <div className="w-80 bg-white p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="korean-sans font-medium">필터</h4>
                        <button onClick={() => setMobileFiltersOpen(false)} className="text-korean-light">닫기</button>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm text-korean-accent mb-2">카테고리</h5>
                        <div className="space-y-2">
                          <label className="flex items-center"><input type="radio" name="mcat" checked={category === 'all'} onChange={() => setCategory('all')} /> <span className="ml-2">전체</span></label>
                          <label className="flex items-center"><input type="radio" name="mcat" checked={category === 'coffee'} onChange={() => setCategory('coffee')} /> <span className="ml-2">원두</span></label>
                          <label className="flex items-center"><input type="radio" name="mcat" checked={category === 'snack'} onChange={() => setCategory('snack')} /> <span className="ml-2">간식</span></label>
                          <label className="flex items-center"><input type="radio" name="mcat" checked={category === 'goods'} onChange={() => setCategory('goods')} /> <span className="ml-2">굿즈</span></label>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm text-korean-accent mb-2">옵션</h5>
                        <label className="flex items-center"><input type="checkbox" checked={onlineOnly} onChange={() => setOnlineOnly(v => !v)} /> <span className="ml-2">온라인 전용</span></label>
                        <label className="flex items-center mt-2"><input type="checkbox" checked={inStockOnly} onChange={() => setInStockOnly(v => !v)} /> <span className="ml-2">재고 있음</span></label>
                      </div>

                      <div>
                        <button onClick={() => setMobileFiltersOpen(false)} className="px-4 py-2 bg-korean-accent text-white rounded korean-sans">적용</button>
                      </div>
                    </div>

                    <div className="flex-1" onClick={() => setMobileFiltersOpen(false)}></div>
                  </div>
                )}

                {/* 商品计数和排序占位（可扩展） */}
                <div className="flex items-center justify-between mb-6">
                  <p className="korean-sans text-korean-light">{filtered.length}개 상품</p>
                  <div>
                    {/* 可添加排序下拉 */}
                  </div>
                </div>

                {/* 商品网格 */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((item, index) => (
                    <article key={item.id} className="korean-card p-4 rounded-lg hover:shadow-lg transition">
                      {/* 只把可导航区域放到 Link，避免把交互按钮包裹在链接内 */}
                      <Link href={`/shop/${item.id}`} className="block">
                        <div className="relative w-full aspect-[3/4] h-88 bg-korean-light/10 rounded-md overflow-hidden mb-4 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0} // 为第一个图片添加 priority
                          />
                        </div>

                        <h3 className="text-lg korean-serif text-korean-accent mb-1">{item.title}</h3>
                        <p className="korean-sans text-sm text-korean-light mb-3">{item.titleEn}</p>
                      </Link>

                      {/* 把交互控件放在 Link 之外，保证按钮可点击 */}
                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <div className="text-xl korean-serif">₩{item.price.toLocaleString()}</div>
                          <div className="text-xs text-korean-light/70">{item.inStock ? '재고 있음' : '품절'}</div>
                        </div>

                        <div className="text-right space-y-1">
                          {item.online && <span className="inline-block px-2 py-1 text-xs bg-korean-warm rounded-full korean-sans">온라인</span>}
                          <AddToCartButton item={{ id: item.id, name: item.title, price: item.price, image: item.image }} />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
