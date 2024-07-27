import Blog from "@/models/blog";
import User from "@/models/user";
import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import { checkToken } from '../../../utils/auth';
import { format } from 'date-fns';

export async function POST(request) {
  let decodedToken = checkToken(request);

  if (!decodedToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const { user: {userId} } = decodedToken;
  const { title, description } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, description, userId });
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET(request) {
  let decodedToken = checkToken(request);

  let userId = decodedToken?.user?.userId || null;
  
  await connectMongoDB();
  const blogs = await Blog.find();
  const updatedBlogs = [];
  for (const blog of blogs) {
      const user = await User.findOne({ userId: blog.userId });
      const formattedDate = format(blog.createdAt, 'MMMM d, yyyy');
      if (user) {
        updatedBlogs.push({ id: blog.blogId, title: blog.title, description: blog.description, createdAt: formattedDate, author: user.name, isBlogAuthor: userId && userId == blog.userId ? true : false, author_pic: user.profile_pic });
      } else {
        updatedBlogs.push({ id: blog.blogId, title: blog.title, description: blog.description, createdAt: formattedDate, isBlogAuthor: false });
      }
  }

  return NextResponse.json({ blogs: updatedBlogs });
}
