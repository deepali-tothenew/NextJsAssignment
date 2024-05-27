'use client'

import { useEffect, useState } from 'react';
import Card from "@/components/Card";
import { useRouter } from "next/navigation";

export default function Blog() {
    const router = useRouter();
    const [blogPosts, setBlogPosts] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchBlogData = async () => {
        try {
          const response = await fetch(`api/blog`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
          });
          const data = await response.json();
          setBlogPosts(data.blogs);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
      
        fetchBlogData();

        if (localStorage.getItem("token") != null) {
          setIsLoggedIn(true);
        }
    }, []);

    const handleAddBlog = () => {
      router.push('/addBlog');
    }

    return (
      <main className="flex flex-col items-center justify-between p-8">
        {isLoggedIn && (<button onClick={handleAddBlog} className="bg-green-600 font-bold text-white py-3 px-6 self-end mb-5">Add Blog</button>)}
        {blogPosts ? (
            blogPosts.length > 0 ? (
              <ul className='grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full'>
                  {blogPosts.map(post => (
                      <li key={post.id} >
                          <Card post={post} />
                      </li>
                  ))}
              </ul>
            ) : (
              <p>No Blogs Found</p>
            )
        ) : (
            <span className="loader gap-x-8 gap-y-10"></span>
        )}
      </main>
    );
  }
  