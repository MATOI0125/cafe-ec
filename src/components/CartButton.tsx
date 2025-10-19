'use client';

import { useState } from 'react';
import { useCart } from './CartContext';

export default function CartButton() {
  const { items, getTotalItems, getTotalPrice, updateQuantity, removeItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="relative">
      {/* 장바구니 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-korean-accent hover:text-korean-light transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 9H19M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-korean-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* 购物车下拉菜单 */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border">
          <div className="p-4">
            <h3 className="text-lg korean-serif font-medium text-korean-accent mb-4">장바구니</h3>
            
            {items.length === 0 ? (
              <p className="korean-sans text-korean-light text-center py-4">장바구니가 비어있습니다</p>
            ) : (
              <>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-2 border-b">
                      <div className="w-12 h-12 bg-korean-warm rounded-lg flex items-center justify-center text-korean-accent border border-korean-accent border-opacity-20">
                        📦
                      </div>
                      <div className="flex-1">
                        <h4 className="korean-sans font-medium text-korean-accent">{item.name}</h4>
                        <p className="korean-sans text-korean-light text-sm">{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-korean-warm text-korean-accent flex items-center justify-center text-sm border border-korean-accent border-opacity-20 hover:bg-korean-accent hover:text-white transition-colors"
                        >
                          -
                        </button>
                        <span className="korean-sans text-korean-accent font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-korean-warm text-korean-accent flex items-center justify-center text-sm border border-korean-accent border-opacity-20 hover:bg-korean-accent hover:text-white transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm ml-2 hover:bg-red-200 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-korean-accent border-opacity-20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="korean-sans font-medium text-korean-accent">합계:</span>
                    <span className="korean-sans font-bold text-korean-accent text-lg">₩{totalPrice.toLocaleString()}</span>
                  </div>
                  <button className="w-full korean-button text-white py-3 rounded-full korean-sans font-medium hover:shadow-lg transition-all duration-300">
                    주문하기
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
