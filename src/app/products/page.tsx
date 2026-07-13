import GetProducts from "@/lib/Actions/GetProduct";
import Link from "next/link";
import ProductImage from "../Components/productimage";

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

export default async function ProductGrid() {
  const data: Product[] = await GetProducts();

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <p className="text-lg font-medium">No products found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto my-10 grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      {data.map((product) => (
        <div
          key={product._id}
          className="flex h-[500px] w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
        >
          {/* Image */}
          <div className="relative h-60 w-full flex-shrink-0 bg-gray-100">
            <ProductImage
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Content */}
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
      ))}
    </div>
  );
}