import Link from "next/link";

interface Post {
  id: string;
  title: string;
  // Add other properties if your API response has them
}

export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: Post[] = await data.json();
  return (
    <div>
        <h1>Blog (Fetching data on the server)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
