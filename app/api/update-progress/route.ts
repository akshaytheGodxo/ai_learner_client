import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { attempted, correct, incorrect } = await req.json();

    const cookieStore = cookies();
    const session = cookieStore.get("session_token");

    if (!session) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    // Find user using session email
    const user = await User.findOne({ email: session.value });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update totals
    user.attempted += attempted;
    user.correct += correct;
    user.incorrect += incorrect;

    await user.save();

    return NextResponse.json({ message: "Progress saved" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
