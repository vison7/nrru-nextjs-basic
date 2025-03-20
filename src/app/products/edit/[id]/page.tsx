// pages/products/edit/[id].tsx (Client component for editing a product)
"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export default function EditProduct() {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  const handleUpdate = async () => {
    if (product) {
      const response = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        router.push("/products"); // Redirect to product list after update
      }
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Product</h1>

      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                placeholder="Name"
              />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <input
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="Description"
              />
            </td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: parseFloat(e.target.value) })
                }
                placeholder="Price"
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={handleUpdate}>Update</button>
              <button
                onClick={() => {
                  router.push("/products");
                }}
              >
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
