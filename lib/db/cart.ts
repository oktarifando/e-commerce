import { prisma } from "./prisma";
import { cookies } from "next/headers";
import { cart, Prisma } from "@prisma/client";

export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  cookies().set("localCartId", newCart.id.toString());

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function getCart() {
  const localId = cookies().get("localCartId")?.value || "";
  const localCartId = parseInt(localId)
  const cart = localCartId ? await prisma.cart.findUnique({ 
    where: { id : localCartId },
    include: {
      items : true
    }})
}
