"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      router.push("/");
    } catch (error: any) {
      console.log(error.Message);
    }
  };

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="mb-5">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          className="border-2 mb-5 border-gray-200 px-4 py-2 rounded-lg w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
          className="border-2 mb-5 border-gray-200 px-4 py-2 rounded-lg w-full"
        />
        <button className="w-full bg-blue-500 px-4 py-2 text-white rounded-lg">
          Login
        </button>
        <div className=" py-8 text-center font-bold">
          {" "}
          <Link href="/signup">Got To Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
