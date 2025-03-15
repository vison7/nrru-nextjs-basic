import { NextResponse } from "next/server";

export async function POST() {
  const data = {
    status: true,
    token:"123456",
    data: {
      firstname: "Vison",
      email: "vison7.sun@gmail.com",
    },
  };

  // const res = await fetch(process.env.API_BLOG_URL, {
  //   method: "GET",
  // });

  // data = await res.json();

  return NextResponse.json(data);
}
