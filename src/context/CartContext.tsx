'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

type CartItem = {
  id: string;
  name?: string;
  price?: number;
  quantity?: number;
  image?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem, qty?: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  count: number;
};

const STORAGE_KEY = 'wf_cart_v1';
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = (item: CartItem, qty = 1) => {
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === item.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: (next[idx].quantity || 1) + qty };
        return next;
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const clear = () => setItems([]);

  const count = items.reduce((s, it) => s + (it.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clear, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
