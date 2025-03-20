import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";

// get profile
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());
  // console.log("param", params);

  try {
    const res = await query("SELECT * FROM users where user_id=$1", [
      params.id,
    ]);

    if (res.rows[0])
      return NextResponse.json({ status: 200, data: res.rows[0] });
    else return NextResponse.json({ status: 404, message: "Data not found" });

    // Return the first row or null if not found
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { status: 500, error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}

// update profile
export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());

  const body = await request.json();

  if (params.id) {
    try {
      const text =
        "UPDATE users SET password=$1,first_name=$2,last_name=$3,email=$4 WHERE user_id=$5";
      const values = [
        body.password,
        body.first_name,
        body.last_name,
        body.email,
        params.id,
      ];

      const res = await query(text, values);
      console.log(res);

      return NextResponse.json({ status: 200, message: "Update successfully" });

      // Return the first row or null if not found
    } catch (error) {
      console.error("Database query failed:", error);
      return NextResponse.json(
        { status: 500, error: "Internal Server Error:" + error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ status: 404, error: "Invalide user ID" });
  }
}

// delete profile
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());

  try {
    const text = "DELETE from users where user_id=$1";
    const values = [params.id];

    const res = await query(text, values);
    console.log(res);

    return NextResponse.json({ status: 200, message: "Delete successfully" });

    // Return the first row or null if not found
  } catch (error) {
    console.error("Database query failed:", error);
    return NextResponse.json(
      { status: 500, error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}
