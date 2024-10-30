// src/app/login/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router?.push("/"); // Redirect to login page if token is not found
    }
  }, [router]);

  const handleLogin = () => {
    // Mock authentication logic
    if (username === "quynh_ne" && password === "quynh_ne") {
      localStorage.setItem("token", "token-nè"); // Store token in localStorage
      router.push("/"); // Redirect to home page
    } else {
      alert("Sai user or pass nè");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        style={{
          border: "1px solid red",
          marginRight: "20px",
          backgroundColor: "white",
          color: "red",
        }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        style={{
          border: "1px solid red",
          backgroundColor: "white",
          color: "red",
        }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        style={{
          border: "1px solid red",
          marginLeft: "20px",
          backgroundColor: "white",
          padding: "10px 20px",
          color: "red",
        }}
      >
        Đăng nhập nè
      </button>
    </div>
  );
}
