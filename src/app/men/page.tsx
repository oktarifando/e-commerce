import PaginationBar from "@/components/PaginationBar";
import { prisma } from "../../../lib/db/prisma";
import ProductHero from "@/components/ProductHero";
import ProductList from "@/components/ProductList";

interface HomeProps {
  searchParams: { page?: string };
}

export default async function MenPage({
  searchParams: { page = "1" },
}: HomeProps) {
  const categoryPage = "pria";
  const currentPage = parseInt(page);
  const pageSize = 9;
  const heroItemCount = 1;
  const totalItemCount = await prisma.product.count({
    where: {
      category: {
        contains: "pria",
      },
    },
  });
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);
  return (
    <main className="flex flex-col items-center">
      <ProductHero categoryPage={categoryPage} />
      <ProductList
        categoryPage={categoryPage}
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
