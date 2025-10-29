'use client';

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center px-3 py-2 rounded-md border korean-sans text-sm"
      aria-label="View cart"
    >
      <span className="mr-2">🛒</span>
      <span className="hidden sm:inline">Cart</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 text-xs bg-korean-accent text-white rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
}
