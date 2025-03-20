import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const text =
      "INSERT INTO users(username,password, first_name, last_name, email) VALUES($1,$2,$3,$4,$5)";
    const values = [
      body.username,
      body.password,
      body.first_name,
      body.last_name,
      body.email,
    ];

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

export async function GET() {
  try {
    const text = "SELECT * from users order by user_id DESC";

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
