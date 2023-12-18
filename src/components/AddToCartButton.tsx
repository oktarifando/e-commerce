"use client";

import Image from "next/image";
import ecommerceLogo from "../../public/ecommerce logo.png";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="btn btn-primary" onClick={() => {}}>
        Add to Cart
        <Image
          src={ecommerceLogo}
          alt="shopping cart icon"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
