"use client";

import PostProduct from "@/lib/Actions/PostProduct";

import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

interface ItemFormData {
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
}

export default function AddItemForm() {
  const [formData, setFormData] = useState<ItemFormData>({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (
  e: FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();

 const result = await PostProduct(formData)
 console.log(result)
 if(result){
  toast.success('Product Published Successfully')
  redirect('/Dashboard/User')
 }
};

  return (
    <div className="min-h-screen bg-black py-12">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[90%] max-w-5xl rounded-2xl border border-gray-800 bg-zinc-950 p-8 shadow-2xl space-y-6"
      >
        <h1 className="text-center text-3xl font-bold text-white">
          Add New Item
        </h1>

        {/* Title */}
        <div>
          <label className="mb-2 block font-medium text-white">
            Title
          </label>

          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter item title"
            className="w-full rounded-lg border border-gray-700 bg-zinc-900 p-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="mb-2 block font-medium text-white">
            Short Description
          </label>

          <input
            type="text"
            name="shortDescription"
            required
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Write a short description"
            className="w-full rounded-lg border border-gray-700 bg-zinc-900 p-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Full Description */}
        <div>
          <label className="mb-2 block font-medium text-white">
            Full Description
          </label>

          <textarea
            name="description"
            required
            rows={6}
            value={formData.description}
            onChange={handleChange}
            placeholder="Write full description..."
            className="w-full rounded-lg border border-gray-700 bg-zinc-900 p-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500 resize-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="mb-2 block font-medium text-white">
            Price
          </label>

          <input
            type="number"
            name="price"
            required
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter item price"
            className="w-full rounded-lg border border-gray-700 bg-zinc-900 p-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="mb-2 block font-medium text-white">
            Image URL (Optional)
          </label>

          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full rounded-lg border border-gray-700 bg-zinc-900 p-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}