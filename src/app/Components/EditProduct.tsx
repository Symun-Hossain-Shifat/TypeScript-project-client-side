"use client";

import { useState, useEffect, type ChangeEvent } from "react";
import { Button, Modal } from "@heroui/react";
import { Pencil } from "lucide-react";

export interface Product {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

interface EditProductModalProps {
  product: Product;
}

type ProductFormData = {
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
};

export function Editpage({ product }: EditProductModalProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: product.title,
    shortDescription: product.shortDescription,
    description: product.description,
    price: product.price,
    image: product.image,
  });

  useEffect(() => {
    setFormData({
      title: product.title,
      shortDescription: product.shortDescription,
      description: product.description,
      price: product.price,
      image: product.image,
    });
  }, [product]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="rounded-md p-2 text-gray-500 hover:bg-amber-50 hover:text-amber-600"
        aria-label="Edit product"
      >
        <Pencil size={16} />
      </Button>

      {/* HeroUI মোডাল স্ক্রোলযোগ্য করার জন্য scrollBehavior="inside" প্রপটি দারুণ কাজ করে */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="max-w-2xl border-0 bg-transparent p-0 shadow-none">
            <Modal.CloseTrigger />

            {/* ফর্মটিতে max-h-[85vh] এবং overflow-y-auto যোগ করা হয়েছে */}
            <form className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-gray-800 bg-zinc-950 p-8 shadow-2xl max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700">
              <h1 className="text-center text-3xl font-bold text-white">
                Edit Item
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
                  className="w-full resize-none rounded-lg border border-gray-700 bg-zinc-900 p-3 text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500"
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

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  slot="close"
                  variant="secondary"
                  type="button"
                  className="w-full rounded-lg py-3 text-lg font-semibold"
                >
                  Cancel
                </Button>
                <button
                  type="button"
                  slot="close"
                  className="w-full rounded-lg bg-orange-500 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-orange-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}