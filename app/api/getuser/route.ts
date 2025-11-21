import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session_user")?.value;

    if (!sessionId) {
      return NextResponse.json(
        { user: null, loggedIn: false },
        { status: 200 }
      );
    }

    const user = await User.findById(sessionId).select("-password");

    if (!user) {
      return NextResponse.json(
        { user: null, loggedIn: false },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { user, loggedIn: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { user: null, loggedIn: false },
      { status: 500 }
    );
  }
}
