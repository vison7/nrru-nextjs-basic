"use client";

import Link from "next/dist/client/link";
import { useState, useEffect } from "react";

interface Post {
  id: string;
  title: string;
  // Add other properties if your API response has them
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setPosts(data);
      } catch (err) {
        console.log(err);
        // setError(err.message || "Failed to fetch posts.");
      } finally {
        // setLoading(false);
        console.log("ok");
      }
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <div className="blockContent">
      <h1>Blog (Fetching data on the client)</h1>

      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/blog-client/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
