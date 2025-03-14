"use client";
import { useState } from "react";
import InputField from "@/components/authPages/InputField";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8">Welcome!</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </form>
      <div className="text-center my-6 text-gray-500 dark:text-gray-400">OR</div>
      <button>Sign Up with Google</button>
    </>
  );
}

