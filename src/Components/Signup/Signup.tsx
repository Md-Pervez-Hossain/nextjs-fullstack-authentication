"use client";
import { instance } from "@/helpers/helpers";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface SignupState {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<SignupState>({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, password);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.Message);
    }
  };

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="mb-5">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={handleChange}
          className="border-2 mb-5 border-gray-200 px-4 py-2 rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="border-2 mb-5 border-gray-200 px-4 py-2 rounded-lg w-full"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your Password"
          className="border-2 mb-5 border-gray-200 px-4 py-2 rounded-lg w-full"
        />
        <button className="w-full bg-blue-500 px-4 py-2 text-white rounded-lg">
          Signup
        </button>
        <div className=" py-8 text-center font-bold">
          <Link href="/login">Go To Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
