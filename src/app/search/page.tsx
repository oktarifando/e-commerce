import React from "react";
import { prisma } from "../../../lib/db/prisma";
import ProductListSearch from "@/app/search/ProductListSearch";
import PaginationBarSearch from "@/app/search/PaginationBarSearch";

interface searchPageProps {
  searchParams: {
    query: string;
    page?: string;
  };
}

export default async function SearchPage({
  searchParams: { query, page = "1" },
}: searchPageProps) {
  const currentPage = parseInt(page);
  const pageSize = 9;

  const totalItemCount = await prisma.product.count({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
  const totalPages = Math.ceil(totalItemCount / pageSize);

  if (totalItemCount === 0) {
    return <div>Produk Tidak Ditemukan !</div>;
  }

  return (
    <main className="flex flex-col items-center">
      <ProductListSearch
        query={query}
        currentPage={currentPage}
        pageSize={pageSize}
      />
      {totalPages > 1 && (
        <PaginationBarSearch
          currentPage={currentPage}
          totalPages={totalPages}
          query={query}
        />
      )}
    </main>
  );
}
