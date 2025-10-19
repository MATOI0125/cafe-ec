export default function Footer() {
  return (
    <footer className="korean-footer mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* 로고 및 소개 */}
        <div className="text-center mb-12">
          <h3 className="text-3xl korean-serif font-light text-korean-accent mb-4">
            Wind Flower Café
          </h3>
          <p className="text-lg korean-sans text-korean-light mb-2">바람꽃 카페</p>
          <p className="korean-sans text-korean-light opacity-80 max-w-md mx-auto leading-relaxed">
            부안의 자연 속에서 마시는 특별한 한 잔<br/>
            <span className="text-sm">A special cup in the nature of Buan</span>
          </p>
        </div>

        {/* 정보 그리드 */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h4 className="korean-serif font-medium text-korean-accent mb-4 text-lg">
              연락처 / Contact
            </h4>
            <div className="korean-sans text-korean-light space-y-2">
              <p className="flex items-center justify-center">
                <span className="mr-2">📍</span>
                전북 부안군 변산면 바람꽃길 123
              </p>
              <p className="flex items-center justify-center">
                <span className="mr-2">📞</span>
                063-123-4567
              </p>
              <p className="flex items-center justify-center">
                <span className="mr-2">📧</span>
                info@windflower.cafe
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="korean-serif font-medium text-korean-accent mb-4 text-lg">
              운영시간 / Hours
            </h4>
            <div className="korean-sans text-korean-light space-y-2">
              <p>월요일 - 일요일</p>
              <p className="text-lg font-medium">09:00 - 21:00</p>
              <p className="text-sm opacity-80">연중무휴</p>
              <p className="text-xs opacity-60">(설날, 추석 제외)</p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="korean-serif font-medium text-korean-accent mb-4 text-lg">
              소셜미디어 / Social
            </h4>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.instagram.com/stay.windflower/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-korean-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                📷
              </a>
              <a 
                href="https://staywindflower.co.kr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-korean-accent transition-colors duration-300"
                aria-label="Official Website"
              >
                🌐
              </a>
              <a 
                href="mailto:info@windflower.cafe"
                className="text-2xl hover:text-korean-accent transition-colors duration-300"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
            <div className="mt-4 korean-sans text-korean-light">
              <p className="text-sm">@stay.windflower</p>
              <p className="text-xs opacity-70">변산바람꽃에서의 특별한 순간들을 공유해요</p>
            </div>
          </div>
        </div>

        {/* 하단 저작권 */}
        <div className="border-t border-korean-accent border-opacity-20 pt-8 text-center">
          <div className="korean-sans text-korean-light">
            <p className="mb-2">
              &copy; 2024 Wind Flower Café. All rights reserved.
            </p>
            <p className="text-sm opacity-70">
              바람꽃 카페 · 전북 부안군 변산면 · 한국의 아름다운 게스트하우스 카페
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
