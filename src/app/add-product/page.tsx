import React from "react";
import FormSubmitButton from "../../components/FormSubmitButton";
import addProduct from "../../../lib/server-actions/addProduct";

const page = () => {
  return (
    <div className="">
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <textarea
          required
          name="description"
          placeholder="description"
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
          placeholder="price"
          className="input input-bordered w-full"
        />
        <FormSubmitButton type="submit" className="btn btn-primary btn-block">
          Add Product
        </FormSubmitButton>
      </form>
    </div>
  );
};

export default page;
