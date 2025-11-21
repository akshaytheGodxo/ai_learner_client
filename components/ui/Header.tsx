"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { UserRoundPen, LogOut } from "lucide-react";

export default function Header() {
    const [user, setUser] = useState<any>(null);
    const [hover, setHover] = useState(false);

    // Fetch current user on load
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch("/api/getuser", { method: "GET" });

                if (!res.ok) return; // no user logged in

                const data = await res.json();
                if (data?.user) setUser(data.user);

            } catch (err) {
                console.log("User not logged in");
            }
        };

        fetchUser();
    }, []);

    // in Header component
    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "POST",
                credentials: "include",
            });

            if (!res.ok) {
                const err = await res.json();
                console.error("Logout failed:", err);
                return;
            }

            // update UI immediately
            setUser(null);
            // reload to ensure cookie removal reflected everywhere
            window.location.reload();
        } catch (e) {
            console.error("Logout fetch error:", e);
        }
    };


    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <Link href="/">
                                <Image
                                    src="/cat.png"
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">

                            <Link href="/" className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg">
                                Home
                            </Link>

                            <Link href="/quiz" className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg">
                                Quiz
                            </Link>

                            <Link href="/stats" className="text-white px-3 py-2 hover:bg-white hover:text-black rounded-lg">
                                Performance
                            </Link>

                            {/* Conditional Login / User */}
                            {!user ? (
                                <Link
                                    href="/login"
                                    className="text-white border px-3 py-2 rounded-lg hover:bg-white hover:text-black"
                                >
                                    Login
                                </Link>
                            ) : (
                                <div className="inline-flex items-center space-x-4">

                                    {/* Hover username display */}
                                    <div
                                        className="rounded-full flex bg-gray-900 items-center justify-center px-3 py-2 cursor-pointer transition-all"
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                    >
                                        <UserRoundPen className="text-white mr-1" />
                                        {hover && <span className="text-white">{user.name}</span>}
                                    </div>

                                    {/* Logout button */}
                                    <Button onClick={handleLogout}>
                                        <LogOut />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
