import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import jwt from 'jsonwebtoken';

// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"; // Store securely

// export async function setAuthCookie(userId: string) {
//   const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
//   cookies().set('authToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/' });
// }

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("authToken", token, {
    path: "/",
  });
}

// export async function getUserIdFromCookie() {
//   const token = cookies().get("authToken")?.value;
//   if (!token) return null;

//   try {
//     const decoded: any = jwt.verify(token, JWT_SECRET);
//     return decoded.userId;
//   } catch (error) {
//     return null; // Token invalid or expired
//   }
// }

export async function getUserIdFromCookie() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;
  if (!token) return null;

  try {
    //   const decoded: any = jwt.verify(token, JWT_SECRET);
    return token;
  } catch (error) {
    console.log(error);
    return null; // Token invalid or expired
  }
}

export async function protectPage() {
  const userId = await getUserIdFromCookie();
  if (!userId) {
    redirect("/user/login");
  }
  return userId; // Return the user ID for use in the protected page
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
}
