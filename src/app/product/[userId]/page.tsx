import { prisma } from "../../../../lib/db/prisma";
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import NotFoundPage from "@/app/not-found";
import { Metadata } from "next";

interface Params {
  params: { userId: string };
}

export async function generateMetadata({
  params: { userId: userId },
}: Params): Promise<Metadata> {
  const id = Number(userId);
  const product = await prisma.product.findUnique({
    where: { id: id },
  });
  return {
    title: product?.name,
    description: product?.description,
  };
}

export default async function ProductPage({ params: { userId } }: Params) {
  const id = Number(userId);
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="flex-col lg:flex-row gap-4 lg:items-center">
      <Image
        src={product.imageUrl}
        alt={`image of ${product.name}`}
        width={500}
        height={500}
        priority
        className="rounded-lg min-h-[500px] max-h-[500px] object-cover"
      />

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
      </div>
    </div>
  );
}
