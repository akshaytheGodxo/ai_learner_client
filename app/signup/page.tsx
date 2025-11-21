"use client";

import { useState } from "react";

export default function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setMsg(data.error || "Something went wrong");
            } else {
                setMsg(data.message || "Signup successful");
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
                <h2 className="text-2xl font-semibold">Sign Up</h2>

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#7847eb] text-white p-2 rounded"
                >
                    {loading ? "Signing up..." : "Sign Up"}
                </button>

                {msg && <p className="text-green-600 text-sm">{msg}</p>}
            </form>
        </main>
    );
}
