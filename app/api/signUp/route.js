import User from "@/models/user";
import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import md5 from "md5";

export async function POST(request) {
  const { name, email, password, profile_pic } = await request.json();
  await connectMongoDB();
  try {
    const newUser = new User({ name, email, password: md5(password), profile_pic });
    await newUser.save();
    return NextResponse.json({ message: "User Created", newUser }, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
