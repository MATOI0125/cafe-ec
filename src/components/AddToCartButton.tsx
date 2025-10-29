'use client';
import React, { useState } from 'react';
import { useCart } from "@/context/CartContext";

type Props = {
  item: {
    id: string;
    name?: string;
    price?: number;
    image?: string;
  };
  qty?: number;
  className?: string;
};

export default function AddToCartButton({ item, qty = 1, className = '' }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handle = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handle}
      className={`${className} inline-flex items-center justify-center px-3 py-1 border rounded korean-sans text-sm`}
      aria-label="Add to cart"
    >
      {added ? '추가됨' : '장바구니'}
    </button>
  );
}
