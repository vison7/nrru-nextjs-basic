import { NextResponse } from "next/server";

export async function GET() {
  let data = {};

  const res = await fetch(`${process.env.API_BLOG_URL}`, {
    method: "GET",
  });

  data = await res.json();

  return NextResponse.json(data);
}
