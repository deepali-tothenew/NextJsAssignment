'use client'

import Link from "next/link";
import navLinks from "@/constants/navLinks";
import {usePathname} from "next/navigation";

export default function Navigation() {
  const pathname = usePathname().toLowerCase()
  return (
    <nav className="flex flex-col items-center justify-between mb-3 text-2xl font-semibold">
      <div className="mb-3 text-2xl font-semibold">
        {navLinks?.map((nav, index) => (
          <Link href={nav.link} key={index} className={`${pathname.includes(nav.label.toLowerCase()) ? 'text-gray-500' : ''} group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-gray-500`}
          >{nav.label}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span></Link>
        ))}
      </div>
    </nav>
  );
}
