import React from "react";
import { prisma } from "../../lib/db/prisma";
import ProductCard from "./ProductCard";

interface productListProps {
  currentPage: number;
  pageSize: number;
  heroItemCount: number;
}

export default async function ProductList({
  currentPage,
  pageSize,
  heroItemCount,
}: productListProps) {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-7 mb-10">
      {allProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            description={product.description}
            createdAt={product.createdAt}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
