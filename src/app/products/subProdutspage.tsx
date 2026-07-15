"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProductImage from "../Components/productimage";
import { Label, ListBox, Select } from "@heroui/react";
import { Product } from "./page";


const CATEGORIES = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "shoes", label: "Shoes" },
  { value: "home", label: "Home & Kitchen" },
  { value: "books", label: "Books & Stationery" },
  { value: "software", label: "Software & Services" },
];

const PRICE_RANGES = [
  { value: "100-1000", label: "$100 - $1,000" },
  { value: "1000-10000", label: "$1,000 - $10,000" },
  { value: "10000-50000", label: "$10,000 - $50,000" },
  { value: "50000-100000", label: "$50,000 - $100,000" },
  { value: "over-100000", label: "Over $100,000" },
];

export default function ProductGridClient({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        product.title?.toLowerCase().includes(q) ||
        product.shortDescription?.toLowerCase().includes(q);

      const matchesCategory = !category || product.category === category;

      let matchesPrice = true;
      if (priceRange) {
        const numericPrice = parseFloat(product.price);
        if (!isNaN(numericPrice)) {
          if (priceRange === "over-100000") {
            matchesPrice = numericPrice > 100000;
          } else {
            const [min, max] = priceRange.split("-").map(Number);
            matchesPrice = numericPrice >= min && numericPrice <= max;
          }
        }
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, search, category, priceRange]);

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <p className="text-lg font-medium">No products found</p>
      </div>
    );
  }

  return (
    <>
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
  <h1 className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl">
    Top It Off
  </h1>
  <p className="mt-4 max-w-xl mx-auto text-base text-gray-500">
    The ultimate collection of street-ready headwear. Find your perfect fit.
  </p>
</div>
      <div className="w-full space-y-4">
        <div className="relative w-8/12 mx-auto mt-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.603z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products, brands..."
            className="w-full pl-11 pr-12 py-2 text-sm text-white placeholder-gray-500 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />

          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <kbd className="inline-flex items-center px-1.5 py-0.5 text-xs font-mono text-gray-400 bg-gray-800 border border-gray-700 rounded">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      <div className="w-full p-10 text-white">
        <div className="w-10/11 mx-auto flex items-center justify-between gap-8">
          <div className="w-[400px] space-y-2">
            <Select
              fullWidth
              placeholder="Select by Category"
              selectedKey={category}
              onSelectionChange={(key) => setCategory(key ? String(key) : null)}
            >
              <Label className="text-sm font-medium text-gray-300">Category</Label>
              <Select.Trigger className="w-full flex items-center justify-between px-4 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                <Select.Value />
                <Select.Indicator className="text-gray-400" />
              </Select.Trigger>
              <Select.Popover className="w-full bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden mt-2 z-50">
                <ListBox className="py-1">
                  {CATEGORIES.map((cat) => (
                    <ListBox.Item
                      key={cat.value}
                      id={cat.value}
                      textValue={cat.label}
                      className="px-4 py-2 text-white hover:bg-gray-800 focus:bg-gray-800 cursor-pointer flex items-center justify-between transition-colors"
                    >
                      {cat.label}
                      <ListBox.ItemIndicator className="text-blue-500" />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
            {category && (
              <button
                onClick={() => setCategory(null)}
                className="text-xs text-gray-400 hover:text-white underline"
              >
                Clear category filter
              </button>
            )}
          </div>

          <div className="w-[400px] space-y-2">
            <Select
              fullWidth
              placeholder="Select By Price"
              selectedKey={priceRange}
              onSelectionChange={(key) => setPriceRange(key ? String(key) : null)}
            >
              <Label className="text-sm font-medium text-gray-300">Price Range</Label>
              <Select.Trigger className="w-full flex items-center justify-between px-4 py-2 text-white bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                <Select.Value />
                <Select.Indicator className="text-gray-400" />
              </Select.Trigger>
              <Select.Popover className="w-full bg-gray-900 border border-gray-700 rounded-md shadow-lg overflow-hidden mt-2 z-50">
                <ListBox className="py-1">
                  {PRICE_RANGES.map((range) => (
                    <ListBox.Item
                      key={range.value}
                      id={range.value}
                      textValue={range.label}
                      className="px-4 py-2 text-white hover:bg-gray-800 focus:bg-gray-800 cursor-pointer flex items-center justify-between transition-colors"
                    >
                      {range.label}
                      <ListBox.ItemIndicator className="text-blue-500" />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
            {priceRange && (
              <button
                onClick={() => setPriceRange(null)}
                className="text-xs text-gray-400 hover:text-white underline"
              >
                Clear price filter
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-lg font-medium">No products match your filters</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex h-[500px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative h-60 w-full flex-shrink-0 bg-gray-100">
                <ProductImage src={product.image} alt={product.title} />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 line-clamp-1 text-base font-semibold text-[#0B2545]">
                  {product.title || "Untitled Product"}
                </h3>

                <p className="mb-3 flex-1 line-clamp-2 text-sm text-gray-500">
                  {product.shortDescription || "No description available."}
                </p>

                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-teal-600">
                    ৳{product.price || "N/A"}
                  </span>
                  <span className="text-xs text-gray-400">
                    {product.createdAt
                      ? new Date(product.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "—"}
                  </span>
                </div>

                <Link
                  href={`/products/${product._id}`}
                  className="mt-auto w-full rounded-full bg-teal-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-teal-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}