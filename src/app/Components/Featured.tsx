
import Link from "next/link";
import ProductImage from "../Components/productimage";
import { GetAllProducts } from "@/lib/Actions/GetProduct";

interface Product {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export default async function FeaturedSection() {
  // Fetch products and safe guard against null/undefined results
  const products = await GetAllProducts()
  // console.log(products) 
  const data: Product[] = products ? products.slice(0, 4) : [];

  if (!data || data.length === 0) {
    return null; // Returns nothing if there are no featured products, hiding the section entirely
  }

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B2545] sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Handpicked top items just for you.
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-teal-600 hover:text-teal-700 hover:underline"
          >
            View All Products &rarr;
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((product) => (
            <div
              key={product._id}
              className="flex h-[480px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Product Image Wrapper */}
              <div className="relative h-56 w-full flex-shrink-0 bg-gray-100">
                <ProductImage
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* Product Details Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 line-clamp-1 text-base font-semibold text-[#0B2545]">
                  {product.title || "Untitled Product"}
                </h3>

                <p className="mb-4 flex-1 line-clamp-2 text-sm text-gray-500">
                  {product.shortDescription || "No description available."}
                </p>

                {/* Price and Date info */}
                <div className="mb-4 flex items-center justify-between">
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

                {/* Action Button */}
                <Link
                  href={`/products/${product._id}`}
                  className="mt-auto w-full rounded-full bg-teal-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-teal-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}