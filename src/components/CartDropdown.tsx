"use client";
import { useState, useRef, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartDropdown() {
  const { items, count, total } = useCart();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉
  function handleClickOutside(e: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }
  // 监听外部点击
  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="relative inline-flex items-center px-3 py-2 rounded-md border korean-sans text-sm focus:outline-none"
        aria-label="View cart"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mr-2">🛒</span>
        <span className="hidden sm:inline">Cart</span>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 text-xs bg-korean-accent text-white rounded-full">
            {count}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded-xl shadow-lg z-50">
          <div className="p-4 border-b text-korean-accent font-semibold">장바구니 ({count})</div>
          {items.length === 0 ? (
            <div className="p-4 text-center text-korean-light">장바구니가 비어 있습니다</div>
          ) : (
            <ul className="max-h-64 overflow-y-auto divide-y">
              {items.map((item) => (
                <li key={item.id} className="flex items-center space-x-3 p-3">
                  <div className="w-14 h-14 rounded bg-korean-warm flex items-center justify-center overflow-hidden relative">
                    {item.image ? (
                      <Image 
                        src={item.image} 
                        alt={item.name || 'Product image'} 
                        fill
                        className="object-cover" 
                        sizes="56px"
                      />
                    ) : (
                      <span className="text-2xl">🛒</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-korean-light">数量: {item.quantity}</div>
                  </div>
                  <div className="text-right text-sm text-korean-accent font-semibold">
                    ₩{item.price?.toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
          {items.length > 0 && (
            <div className="px-4 py-3 border-t bg-korean-warm/30">
              <div className="flex justify-between items-center korean-sans">
                <span className="font-medium text-korean-accent">합계</span>
                <span className="font-bold text-lg text-korean-accent">₩{total.toLocaleString()}</span>
              </div>
            </div>
          )}
          <div className="p-4 border-t text-right">
            <Link href="/cart" className="korean-button px-6 py-2 rounded-full text-white text-sm">장바구니 보기</Link>
          </div>
        </div>
      )}
    </div>
  );
}
