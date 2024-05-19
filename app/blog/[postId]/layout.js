import Link from "next/link";

function BlogDetailLayout({ children }) {
    return (
        <main className="flex flex-col items-center justify-between p-8">
            <Link href="/blog" className="self-start transition-colors hover:text-gray-500 block text-left group rounded-lg border border-transparent"
          >
          <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
            &lt;-
          </span>{" "}Back</Link>
            {children}
        </main>
    );
}

export default BlogDetailLayout;