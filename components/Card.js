import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { useRouter } from "next/navigation";

export default function Card({post}) {  
  const router = useRouter();
  const handleDeleteBlog = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        const res = await fetch(`api/blog/${post.id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          }
        });
        let response = await res.json();

        if (res.ok) {
          alert(response.message);
          router.push('/');
        } else {
          throw new Error("Failed to delete a blog");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <article className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 flex flex-col">
    {/* {post?.isBlogAuthor && <FontAwesomeIcon icon={faEdit} className="self-end" onClick={handleEditBlog} />} */}
      {post?.isBlogAuthor && <FontAwesomeIcon icon={faTrash} className="self-end" onClick={handleDeleteBlog} />}
      <div className="pt-6 space-y-4">
        <h3 className='text-2xl blog-title font-bold'>{post?.title}</h3>
          <blockquote>
            <p className="text-lg font-medium">
            {`${post?.description.slice(0, 100)}...`}
            </p>
          </blockquote>
          <div className="font-medium">
            <div>
              By <b>{post?.author}</b>
            </div>
            <div>
              {post?.createdAt}
            </div>
          </div>
        </div>
        <Link href={`/blog/${post?.id}`} className="transition-colors hover:text-gray-500 block text-right group rounded-lg border border-transparent"
          >Read More{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span></Link>
    </article>
  );
}
