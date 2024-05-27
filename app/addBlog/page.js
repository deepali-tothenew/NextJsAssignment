"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`api/blog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        alert("Blog Added Successfully");
        router.push("/blog");
      } else {
        throw new Error("Failed to create a blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-8">
    <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white p-8">Add Blog</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Blog Title"
      />

    <textarea onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        placeholder="Blog Description"></textarea>

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-full"
      >
        Add Blog
      </button>
    </form>
    </main>
  );
}