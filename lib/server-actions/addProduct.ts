import { prisma } from "../db/prisma";
import { redirect } from "next/navigation";

export default async function addProduct(formData: FormData) {
  "use server";
  await prisma.product.create({
    data: {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      price: Number(formData.get("price")),
      createdAt: new Date(),
    },
  });
  redirect("/");
}
