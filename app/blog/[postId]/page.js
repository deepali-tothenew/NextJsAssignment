// Fetch data in the component directly
async function fetchBlogDataById(postId) {
  try {
    const response = await fetch(`http://localhost:3000/api/blog/${postId}`);
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const BlogPostId = async ({ params: { postId  } }) => {
  if (!isNaN(parseInt(postId))) {
    const blogData = await fetchBlogDataById(parseInt(postId));
    

    if (!blogData) {
      // Handle not found or error state
      return <div>Blog not found</div>;
    }

    return (
      <>
        {blogData ? (
          <>
            <h2 className='text-slate-900 text-4xl tracking-tight font-extrabold sm:text-5xl dark:text-white'>{blogData.title}</h2>
            <div className='mt-10 text-lg text-slate-600 text-center mx-auto dark:text-slate-400'>
              {blogData?.description}
            </div>
          </>
        ) : (
          <span className="loader gap-x-8 gap-y-10"></span>
        )}
      </>
    );
  }
};

export default BlogPostId;
