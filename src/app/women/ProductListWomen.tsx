import React from "react";
import { prisma } from "../../../lib/db/prisma";
import ProductCard from "../../components/ProductCard";

export default async function ProductList() {
  const allProducts = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
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
