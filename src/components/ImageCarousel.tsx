'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  height?: string;
}

export default function ImageCarousel({ 
  images, 
  interval = 4000, 
  className = "",
  height = "h-[70vh]" 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // 手动切换到指定索引
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // 上一张
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // 下一张
  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) {
    return (
      <div className={`${height} bg-korean-warm rounded-3xl flex items-center justify-center ${className}`}>
        <p className="korean-sans text-korean-light">이미지를 로딩 중입니다...</p>
      </div>
    );
  }

  return (
    <div className={`relative ${height} rounded-3xl overflow-hidden ${className}`}>
      {/* 图片容器 */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Wind Flower Café ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={index === 0}
              onLoad={() => index === 0 && setIsLoading(false)}
            />
          </div>
        ))}
        
        {/* 渐变遮罩，为文字提供更好的可读性 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      {/* 左右箭头 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-40"
        aria-label="이전 이미지"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-40"
        aria-label="다음 이미지"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示器圆点 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`이미지 ${index + 1}로 이동`}
          />
        ))}
      </div>

      {/* 加载指示器 */}
      {isLoading && (
        <div className="absolute inset-0 bg-korean-warm flex items-center justify-center">
          <div className="korean-sans text-korean-accent">로딩 중...</div>
        </div>
      )}
    </div>
  );
}
