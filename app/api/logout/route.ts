// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ message: "Logged out successfully" });

    // clear the same cookie name you set at login ("session_user")
    response.cookies.set("session_user", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: new Date(0),
    });

    return response;
  } catch (err) {
    console.error("Logout error:", err);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
