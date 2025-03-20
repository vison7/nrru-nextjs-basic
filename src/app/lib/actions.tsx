"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { query } from "@/app/lib/db";
// import { revalidatePath } from "next/cache";

export async function deleteCookieAndRedirect(
  cookieName: string,
  redirectTo: string
) {
  try {
    const cookieStore = await cookies();
    if (cookieStore.has(cookieName)) {
      cookieStore.delete(cookieName);
      console.log(`Cookie '${cookieName}' deleted successfully.`);
    } else {
      console.log(`Cookie '${cookieName}' not found.`);
    }

    redirect(redirectTo);
  } catch (error) {
    console.error(`Error deleting cookie '${cookieName}':`, error);
  }
}

export async function createFeedback(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  // console.log(name,reason);

  // const rawDataObj = Object.fromEntries(formData);
  // const rawDataValues = Object.values(rawDataObj);
  // const rawDataKeys = Object.keys(rawDataObj);
  // console.log(rawDataObj);
  // console.log(rawDataValues);
  // console.log(rawDataKeys);

  let code = 200;
  try {
    await query(
      "INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    // return { success: true };
  } catch (error) {
    console.log("error:", error);
    code = 500;
    // redirect("/form/error");
    // return { error: "Failed to submit feedback." };
  }
  // query()
  redirect("/form/success?code=" + code);
}

export async function updateProduct(formData: FormData) {}

export async function deleteProduct(formData: FormData) {}
