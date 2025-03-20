"use client";

import { useRouter } from "next/navigation";
import { useHasCookie, useGetCookie } from "cookies-next";
import { useEffect } from "react";

export default function Profile() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const router = useRouter();

  // const hasCookie = useHasCookie();
  const getCookie = useGetCookie();


  useEffect(() => {
  }, []);



  return (
    <div>
      <h1>Profile</h1>
      Cookie:{getCookie("token")}
    </div>
  );
}
