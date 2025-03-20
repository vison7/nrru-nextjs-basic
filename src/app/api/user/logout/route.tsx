import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Logout and clear all cookies
export async function DELETE() {
  (await cookies()).delete("token");
  // (await cookies()).delete("webtoken");
  // (await cookies()).delete("x-user");

  return NextResponse.json({ status: true, metod: "DELETE" });
}
