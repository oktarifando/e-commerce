import React from "react";
import { prisma } from "../../../lib/db/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

async function addProductToDB(formData: FormData) {
  "use server";
  await prisma.product.create({
    data: {
      name: formData.get("name") as string,
      category: formData.get("category") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      price: Number(formData.get("price")),
    },
  });

  redirect("/");
}

export default async function AddProduct() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="">
      <h1 className="mb-3 text-lg font-bold">Tambah Produk Baru</h1>
      <form action={addProductToDB}>
        <input
          required
          name="name"
          type="text"
          placeholder="nama produk"
          className="input input-bordered w-full"
        />
        <input
          required
          name="category"
          type="text"
          placeholder="kategori, boleh lebih dari 1. cth pria / wanita / anak-anak / baju / celana / sepatu etc"
          className="input input-bordered w-full"
        />
        <textarea
          required
          name="description"
          placeholder="deskripsi"
          className="textarea textarea-bordered w-full mb-3"
        />
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="harga"
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Tambah Produk
        </button>
      </form>
    </div>
  );
}
