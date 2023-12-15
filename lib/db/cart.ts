import { prisma } from "./prisma";
import { cookies } from "next/dist/client/components/headers";
import { cart, Prisma } from "@prisma/client";

export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function getCart() {
  const localCartId = cookies().get("localCartId")?.value;
}
