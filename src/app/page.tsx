/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router?.push("/login"); // Redirect to login page if token is not found
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login"); // Redirect to login page
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>You are successfully logged in!</p>
      <button
        onClick={logout}
        style={{
          border: "1px solid red",
          marginLeft: "20px",
          backgroundColor: "white",
          padding: "10px 20px",
          color: "red",
        }}
      >
        Đăng xuất nè
      </button>
    </div>
  );
}
