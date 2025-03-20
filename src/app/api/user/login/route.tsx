import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";

import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();

  const text = "SELECT * from users WHERE username=$1 and password=$2";
  const values = [body.username, body.password];

  try {
    const res = await query(text, values);
    console.log(res.rows);

    if (res.rows[0]) {
      // set cookie token
      (await cookies()).set({
        name: "token",
        value: JSON.stringify(res.rows[0]),
        path: "/",
        maxAge: 3600,
      });

      return NextResponse.json({ status: 200, profile: res.rows[0] });
    } else {
      return NextResponse.json({
        status: 404,
        message: "User or password invalid.",
      });
    }

    // Return the first row or null if not found
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { status: 500, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
