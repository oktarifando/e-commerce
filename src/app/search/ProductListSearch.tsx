import React from "react";
import { prisma } from "../../../lib/db/prisma";
import ProductCard from "../../components/ProductCard";

interface productListSearchProps {
  currentPage: number;
  pageSize: number;
  query: string;
}

export default async function ProductListSearch({
  currentPage,
  pageSize,
  query,
}: productListSearchProps) {
  const skip = (currentPage - 1) * pageSize;
  const take = pageSize;

  const allProducts = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    skip: skip,
    take: take,
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
