// "use server";

import { cookies } from "next/headers";
import Link from "next/link";
// import { redirect } from 'next/navigation'

const TopBar = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  let user = null;

  if (token?.value) user = JSON.parse(token.value);


  return (
    <div className="topbar">
      <ul id="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {/* <li>
          <Link href="/blog-client">Blog (Client)</Link>
        </li> */}
        <li>
          <Link href="/products">Product</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/form">Form</Link>
        </li>
      </ul>

      {(token?.value && (
        <>
          {/* <ul id="menu-user">
            <li>
              <Link href="/user/login">Hi, {user?.username}</Link>
            </li>
            <li>
              <Link href="/user/logout">Logout</Link>
            </li>
          </ul> */}
        </>
      )) || (
        <>
          {/* <ul id="menu-user">
            <li>
              <Link href="/user/login">Login</Link>
            </li>
            <li>
              <Link href="/user/register">Register</Link>
            </li>
          </ul> */}
        </>
      )}

    </div>
  );
};

export default TopBar;
