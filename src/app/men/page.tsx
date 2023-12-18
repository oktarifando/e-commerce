import PaginationBar from "@/components/PaginationBar";
import { prisma } from "../../../lib/db/prisma";
import ProductHeroMen from "./ProductHeroMen";
import ProductListMen from "./ProductListMen";

interface HomeProps {
  searchParams: { page?: string };
}

export default async function MenPage({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const heroItemCount = 1;
  const totalItemCount = await prisma.product.count();
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);
  return (
    <main className="flex flex-col items-center">
      <ProductHeroMen />
      <ProductListMen
        currentPage={currentPage}
        pageSize={pageSize}
        heroItemCount={heroItemCount}
      />
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </main>
  );
}
