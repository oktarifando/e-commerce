import Image from "next/image";
import React from "react";
import Link from "next/link";
import PriceTag from "./PriceTag";

type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: Date;
};

const ProductCard = ({
  id,
  name,
  description,
  price,
  imageUrl,
  createdAt,
}: ProductCardProps) => {
  const isNew =
    Date.now() - new Date(createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src={imageUrl}
          alt={`image of ${name}`}
          width={500}
          height={500}
          className="max-h-[500px] min-h-[500px] object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="title flex gap-x-1">
          <Link
            href={`/product/${id}`}
            className="card-title  hover:underline "
          >
            {name}
          </Link>
          {isNew && <div className="badge badge-secondary">New</div>}
        </div>
        <p>{description}</p>
        <PriceTag price={price} />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Beli Langsung</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
