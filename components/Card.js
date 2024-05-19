import Link from "next/link";

export default function Card({post}) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <div className="pt-6 space-y-4">
        <h3 className='text-2xl blog-title font-bold'>{post?.title}</h3>
          <blockquote>
            <p className="text-lg font-medium">
            {`${post?.content.slice(0, 100)}...`}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>
              By <b>{post?.author}</b>
            </div>
            <div>
              {post?.date_published}
            </div>
          </figcaption>
        </div>
        <Link href={`/blog/${post?.id}`} className="transition-colors hover:text-gray-500 block text-right group rounded-lg border border-transparent"
          >Read More{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span></Link>
    </figure>
  );
}
