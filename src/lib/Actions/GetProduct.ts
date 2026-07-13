const URL = process.env.NEXT_PUBLIC_SERVER_URI;


export const GetAllProducts = async () => {
  const res = await fetch(`${URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await res.json();

  return result.data; 
};




export const GetSpecificProduct = async (id: string) => {
  console.log("Product ID:", id);

  const res = await fetch(`${URL}/api/products?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Status:", res.status);
    console.error("Error:", error);

    throw new Error(`Failed to fetch product: ${res.status}`);
  }

   const result = await res.json();

  return result.data; 
};