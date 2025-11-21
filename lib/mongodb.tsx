import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL as string;

if (!MONGODB_URI) {
  throw new Error("Add MONGO_URI to your .env.local");
}

let isConnected = false;

export async function connectDB() {
  console.log("Reached here");

  if (isConnected) return;

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}
