'use client'
import { Eye, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

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

interface ProductManageTableProps {
  products: Product[];
  onView?: (product: Product) => void;
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ProductManageTable({
  products,
  onView,
  onEdit,
  onDelete,
}: ProductManageTableProps) {
  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 py-12 text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-gray-600">
              ID
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-600">
              Title
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-600">
              Price
            </th>
            <th className="px-4 py-3 text-left font-semibold text-gray-600">
              Created At
            </th>
            <th className="px-4 py-3 text-right font-semibold text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="max-w-[120px] truncate px-4 py-3 text-gray-500">
                {product._id}
              </td>
              <td className="px-4 py-3 font-medium text-gray-900">
                {product.title}
              </td>
              <td className="px-4 py-3 text-gray-700">${product.price}</td>
              <td className="px-4 py-3 text-gray-500">
                {formatDate(product.createdAt)}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/products/${product._id}`}
                    
                    className="rounded-md p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                    
                  >
                    <Eye size={16} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onEdit?.(product)}
                    className="rounded-md p-2 text-gray-500 hover:bg-amber-50 hover:text-amber-600"
                    aria-label="Edit product"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete?.(product)}
                    className="rounded-md p-2 text-gray-500 hover:bg-red-50 hover:text-red-600"
                    aria-label="Delete product"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductManageTable;