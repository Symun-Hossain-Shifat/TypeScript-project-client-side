
const URL = process.env.NEXT_PUBLIC_SERVER_URI 

const GetProducts = async () => { 
    
  const res = await fetch(
    `${URL}/api/products`,
    
  );

  const result = await res.json();
  return result;
};

export default GetProducts;