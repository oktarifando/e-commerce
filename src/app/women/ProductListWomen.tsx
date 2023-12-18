import React from "react";
import { prisma } from "../../../lib/db/prisma";
import ProductCard from "../../components/ProductCard";

interface productListProps {
  currentPage: number;
  pageSize: number;
  heroItemCount: number;
}

export default async function ProductListWomen({
  currentPage,
  pageSize,
  heroItemCount,
}: productListProps) {
  const allProducts = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: "wanita", mode: "insensitive" } },
        { category: { contains: "wanita", mode: "insensitive" } },
        { description: { contains: "wanita", mode: "insensitive" } },
      ],
    },
    orderBy: { createdAt: "desc" },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 gap-7 mb-10">
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
