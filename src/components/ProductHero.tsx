import Image from "next/image";
import React from "react";
import { prisma } from "../../lib/db/prisma";
import Link from "next/link";

export default async function ProductHero() {
  const latestProduct = await prisma.product.findFirst({
    orderBy: { id: "desc" },
  });

  if (!latestProduct) {
    return <div>Tidak ada produk terbaru</div>;
  }

  return (
    <div>
      <div className="hero bg-base-200 rounded-xl mb-10 w-full">
        <div className="hero-content flex-col lg:flex-row justify-center">
          <Image
            src={latestProduct.imageUrl}
            alt={`image of ${latestProduct.name}`}
            width={500}
            height={500}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{latestProduct.name}</h1>
            <p className="py-6">{latestProduct.description}</p>
            <Link
              href={`/product/${latestProduct.id}`}
              className="btn btn-primary"
            >
              Cek Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
