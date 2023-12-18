"use server";

import { prisma } from "../../../lib/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";

async function createCart() {
  const newCart = await prisma.cart.create({
    data: {},
  });

  localStorage.setItem("localCartId", newCart.id.toString());
}

async function getCart() {
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

async function getCardAndGetCardItem()

export async function incrementItemCartQuantity(id: string) {
  const localCartId = localStorage;
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (localCartId === null) {
    await createCart();
    await getCart()
    await 
  } else if (localCartId && !isLoggedIn) {
    await getCart()
  } else {
  }
}
