"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import {  useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
        }),
      });

      console.log("res:", response);

      if (!response.ok) {
        const errorData = await response.json();
        setSuccess("");
        setError(errorData.message || "Error: Create product error please check the data.");
        return;
      }

      setSuccess("Create product successfully!");
      resetFrm();
      // router.push("/products"); // Redirect to profile
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const resetFrm = () => {
    setName("");
    setDescription("");
    setPrice("");
    setError("");
  };

  return (
    <div className="blockContent">
      <h1>Products</h1>

      <Link href="/products">Product List</Link>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {success && <p style={{ color: "green" }}>
        {success}
        <button type="button" onClick={()=> location.href='/products'}>back to product list</button>
      </p>}

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Product Name :</td>
              <td>
                <div className="frmBox">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>Description:</td>
              <td>
                <div className="frmBox">
                  <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>Price:</td>
              <td>
                <div className="frmBox">
                  <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
                <button type="button" onClick={()=> location.href='/products'}>Back</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
