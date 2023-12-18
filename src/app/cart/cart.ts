import { prisma } from "../../../lib/db/prisma";
import { cart, Prisma } from "@prisma/client";
import Cart from "./page";

export async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  localStorage.setItem("localCartId", newCart.id.toString());
}

export async function getCart() {
  const localId = localStorage.getItem("localCartId");
  if (localId !== null) {
    const localIdString = parseInt(localId);
    const cart = await prisma.cart.findUnique({
      where: { id: localIdString },
      include: {
        cart_items: { include: { products: true } },
      },
    });
  }
}
