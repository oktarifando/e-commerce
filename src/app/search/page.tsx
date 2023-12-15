import React from "react";
import { prisma } from "../../../lib/db/prisma";
import ProductCard from "../../components/ProductCard";

interface searchPageProps {
  searchParams: {
    query: string;
  };
}

export default async function SearchPage({
  searchParams: { query },
}: searchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });

  if (products.length === 0) {
    return <div className="text-center p-8">Produk Tidak Ditemukan</div>;
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            createdAt={product.createdAt}
          />
        );
      })}
    </main>
  );
}
