"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  // Add other properties if your API response has them
}

export default function Page() {
  //   const data = await fetch("/api/products");
  //   const products: Product[] = await data.json();

  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setProducts(data.data);
    } catch (err) {
      console.log(err);
      // setError(err.message || "Failed to fetch posts.");
    } finally {
      // setLoading(false);
      console.log("ok");
    }
  }

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/products/${id}`, { method: 'DELETE' });
    if (response.ok) {
        await fetchData()
    //   setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="blockContent">
      <h1>Products</h1>

      <h4>
        <Link href="/products/add">Add Product</Link>
      </h4>

      <table className="tb">
        <tbody>
          <tr className="tbHead">
            <td>ID</td>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td></td>
          </tr>

          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <Link href={`/products/edit/${product.id}`}>Edit</Link>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
