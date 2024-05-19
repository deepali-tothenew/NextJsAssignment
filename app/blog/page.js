'use client'

import { useEffect, useState } from 'react';
import Card from "@/components/Card";

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState(null);

    const fetchBlogData = async () => {
        try {
          const response = await fetch('https://dummyapi.online/api/blogposts');
          const data = await response.json();
          setBlogPosts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        {blogPosts ? (
            <ul className='grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {blogPosts.map(post => (
                    <li key={post.id} >
                        <Card post={post} />
                    </li>
                ))}
            </ul>
        ) : (
            <span className="loader gap-x-8 gap-y-10"></span>
        )}
      </main>
    );
  }
  