/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { query } from "@/app/lib/db";

export async function GET(request: Request, { params }: any) {
  try {
    const results = await query("SELECT * FROM products WHERE id = $1", [
      params.id,
    ]);
    if (results.rows.length > 0) {
      return NextResponse.json(results.rows[0]);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: any) {
  try {
    const { name, description, price } = await request.json();
    const results = await query(
      "UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *",
      [name, description, price, params.id]
    );
    if (results.rows.length > 0) {
      return NextResponse.json(results.rows[0]);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const results = await query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [params.id]
    );
    if (results.rows.length > 0) {
      return NextResponse.json({ message: "Product deleted" });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error:" + error },
      { status: 500 }
    );
  }
}
