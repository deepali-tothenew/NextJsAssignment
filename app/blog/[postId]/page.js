'use client'

import { useEffect, useState } from 'react';

function BlogPostId({params}) {
  const [blogData, setBlogData] = useState(null);

  const fetchBlogDataById = async () => {
      try {
        const response = await fetch(`https://dummyapi.online/api/blogposts/${params.postId}`);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      fetchBlogDataById();
  }, []);

  return (
    <>
      {blogData ? (
        <>
          <h2 className='text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white'>{blogData.title}</h2>
          <div className='mt-10 text-lg text-slate-600 text-center mx-auto dark:text-slate-400'>
            {blogData?.content}
          </div>
        </>
      ) : (
        <span className="loader gap-x-8 gap-y-10"></span>
      )}
    </>
  );
}
  
export default BlogPostId;