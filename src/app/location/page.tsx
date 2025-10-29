import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Location() {
  return (
    <div className="min-h-screen korean-calm">
      <Navigation />

      <div className="pt-24 pb-16 korean-section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 페이지 헤더 */}
            <div className="text-center mb-16 gentle-fade-in">
              <h1 className="text-4xl md:text-5xl korean-serif font-light text-korean-accent mb-4 korean-text-shadow">
                Location
              </h1>
              <p className="text-xl korean-sans text-korean-light mb-2">
                오시는 길
              </p>
              <p className="korean-sans text-korean-light max-w-2xl mx-auto leading-relaxed">
                바람꽃 카페로 오시는 길을 안내해드립니다<br/>
                <span className="text-sm opacity-80">Find your way to Wind Flower Café in beautiful Buan</span>
              </p>
            </div>

            {/* 지도 섹션 */}
            <div className="mb-16 gentle-fade-in">
              <div className="korean-card p-8">
                <h2 className="text-2xl korean-serif font-medium text-korean-accent mb-6 text-center">
                  지도 / Map
                </h2>
                {/* Google Maps Embed */}
                <div className="rounded-2xl overflow-hidden mb-6" style={{height: '384px'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.64038668681!2d126.54428639999999!3d35.587266899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35710942a6d1264b%3A0x8b7e245b0174733c!2z7Iqk7YWM7J20IOuzgOyCsOuwlOuejOq9gw!5e0!3m2!1sja!2sjp!4v1761745232943!5m2!1sja!2sjp"
                    width="100%"
                    height="384"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
                
                {/* 주소 정보 */}
                <div className="text-center korean-sans text-korean-light">
                  <p className="text-lg font-medium mb-2">스테이 변산바람꽃</p>
                  <p className="text-sm opacity-80 mb-4">６−７ Jakdang-gil, Jinseo-myeon, Buan-gun, Jeonbuk State</p>
                  <div className="flex justify-center space-x-4">
                    <button className="px-4 py-2 border border-korean-accent text-korean-accent hover:bg-korean-accent hover:text-white transition-all duration-300 rounded-full text-sm">
                      카카오맵으로 보기
                    </button>
                    <button className="px-4 py-2 border border-korean-accent text-korean-accent hover:bg-korean-accent hover:text-white transition-all duration-300 rounded-full text-sm">
                      Google 지도
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 교통 정보 */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* 자동차 */}
              <div className="korean-card p-8 gentle-fade-in">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🚗</div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent">
                    자동차 이용시
                  </h3>
                  <p className="korean-sans text-sm text-korean-light opacity-80">By Car</p>
                </div>
                <div className="korean-sans text-korean-light space-y-3">
                  <div>
                    <p className="font-medium mb-1">서울 출발</p>
                    <p className="text-sm opacity-80">서해안고속도로 → 부안IC → 변산반도 방면 (약 3시간)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">광주 출발</p>
                    <p className="text-sm opacity-80">호남고속도로 → 정읍IC → 부안 방면 (약 1시간 30분)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">주차 안내</p>
                    <p className="text-sm opacity-80">카페 전용 주차장 20대 (무료)</p>
                  </div>
                </div>
              </div>

              {/* 대중교통 */}
              <div className="korean-card p-8 gentle-fade-in">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🚌</div>
                  <h3 className="text-xl korean-serif font-medium text-korean-accent">
                    대중교통 이용시
                  </h3>
                  <p className="korean-sans text-sm text-korean-light opacity-80">Public Transport</p>
                </div>
                <div className="korean-sans text-korean-light space-y-3">
                  <div>
                    <p className="font-medium mb-1">버스 이용</p>
                    <p className="text-sm opacity-80">부안터미널 → 변산행 버스 (30분 간격 운행)</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">기차 + 버스</p>
                    <p className="text-sm opacity-80">정읍역 → 부안행 버스 → 변산행 버스</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">픽업 서비스</p>
                    <p className="text-sm opacity-80">숙박 고객 대상 부안터미널 픽업 가능 (사전 예약)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 주변 관광지 */}
            <div className="korean-card p-8 gentle-fade-in">
              <h2 className="text-2xl korean-serif font-medium text-korean-accent mb-8 text-center">
                주변 관광지 / Nearby Attractions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative rounded-2xl h-48 mb-4 overflow-hidden">
                    <Image
                      src="/images/hero/sea.jpg"
                      alt="격포해수욕장"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h4 className="korean-serif font-medium text-korean-accent mb-2">격포해수욕장</h4>
                  <p className="korean-sans text-sm text-korean-light opacity-80">아름다운 서해 일몰 명소 (도보 15분)</p>
                </div>
                
                <div className="text-center">
                  <div className="relative rounded-2xl h-48 mb-4 overflow-hidden">
                    <Image
                      src="/images/hero/mt.jpg"
                      alt="내소사"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h4 className="korean-serif font-medium text-korean-accent mb-2">내소사</h4>
                  <p className="korean-sans text-sm text-korean-light opacity-80">천년고찰과 단풍명소 (차량 10분)</p>
                </div>
                
                <div className="text-center">
                  <div className="relative rounded-2xl h-48 mb-4 overflow-hidden">
                    <Image
                      src="/images/hero/sea1.jpg"
                      alt="채석강"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h4 className="korean-serif font-medium text-korean-accent mb-2">채석강</h4>
                  <p className="korean-sans text-sm text-korean-light opacity-80">기암절벽과 일몰 절경 (차량 20분)</p>
                </div>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="mt-16 text-center korean-card p-8 gentle-fade-in">
              <h2 className="text-2xl korean-serif font-medium text-korean-accent mb-8">
                연락처 / Contact
              </h2>
              <div className="grid md:grid-cols-3 gap-8 korean-sans text-korean-light">
                <div>
                  <div className="text-3xl mb-3">📞</div>
                  <h4 className="font-medium mb-2">전화번호</h4>
                  <p className="text-lg">+82 10-9584-1559</p>
                  <p className="text-sm opacity-80">운영시간 내 상담 가능</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">📧</div>
                  <h4 className="font-medium mb-2">이메일</h4>
                  <p className="text-lg">info@windflower.cafe</p>
                  <p className="text-sm opacity-80">예약 및 문의</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">⏰</div>
                  <h4 className="font-medium mb-2">운영시간</h4>
                  <p className="text-lg">09:00 - 21:00</p>
                  <p className="text-sm opacity-80">연중무휴 (설날, 추석 제외)</p>
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