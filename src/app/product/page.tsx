"use client";

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
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
