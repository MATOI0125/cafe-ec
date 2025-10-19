'use client';

import { useCart } from "@/components/CartContext";

interface AddToCartButtonProps {
  item: {
    name: string;
    price: string;
    image: string;
  };
}

export default function AddToCartButton({ item }: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: item.name.toLowerCase().replace(/\s+/g, '-'),
      name: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="korean-button text-white px-4 py-2 rounded-full korean-sans font-medium text-sm hover:shadow-lg transition-all duration-300"
    >
      담기
    </button>
  );
}
