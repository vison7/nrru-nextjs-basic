import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";

// import { cookies } from "next/headers";

export async function GET() {

  try {
    const text = "SELECT * from products order by id DESC";
    const res = await query(text);
    console.log(res);

    return NextResponse.json({ status: 200, data: res.rows });

    // Return the first row or null if not found
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { status: 500, error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const text =
      "INSERT INTO products(name,description,price) VALUES($1,$2,$3)";
    const values = [body.name, body.description, body.price];

    const res = await query(text, values);
    console.log(res);

    return NextResponse.json({ status: 200, message: "Successfully" });

    // Return the first row or null if not found
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { status: 500, error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}
