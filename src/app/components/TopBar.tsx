"use client";
import React from "react";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="topbar">
      <ul id="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog-client">Blog (Client)</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <ul id="menu-user">
        <li>
          <Link href="/user/login">Login</Link>
        </li>
        <li>
          <Link href="/user/register">Register</Link>
        </li>
      </ul>

      {/* <div className="clear"></div> */}
    </div>
  );
};

export default TopBar;
