import { generateToken } from '../../../utils/auth';
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  try {
    // Authenticate user (e.g., validate credentials against database)
    await connectMongoDB();
    const user = await User.findOne({ email, password: md5(password) });

    if (!user) {
      return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
    }
    // Generate JWT token
    const token = generateToken(user);

    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
};
