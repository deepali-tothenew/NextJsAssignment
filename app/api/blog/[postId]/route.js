import Blog from "@/models/blog";
import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";

export async function GET(request, { params }) {
    const { postId } = params;
    await connectMongoDB();
    const blog = await Blog.findOne({ blogId: postId });
    return NextResponse.json(blog, { status: 200 });
}

export async function PUT(request, { params }) {
  const { postId } = params;
  const { title, description } = await request.json();
  await connectMongoDB();
  const blog = await Blog.findOne({ blogId: postId });
  await Blog.findByIdAndUpdate(blog._id, { title, description });
  return NextResponse.json({ message: "Blog updated" }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { postId } = params;
    await connectMongoDB();
    const blog = await Blog.findOne({ blogId: postId });
    await Blog.findByIdAndDelete(blog._id);
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
}
