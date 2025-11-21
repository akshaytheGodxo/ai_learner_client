"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.error || "Login failed");
      } else {
        setMsg("Login successful");
        router.push("/");
        // redirect if you want
        // window.location.href = "/dashboard";
      }
    } catch (err) {
      setMsg("Network error");
    }

    setLoading(false);
  };

  return (
    <main className="w-full flex justify-center mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-6 rounded-xl w-[350px]"
      >
        <h2 className="text-2xl font-semibold">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#7847eb] text-white p-2 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {msg && <p className="text-sm text-red-500">{msg}</p>}
      </form>
    </main>
  );
}
