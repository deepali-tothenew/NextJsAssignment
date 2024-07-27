import Image from "next/image";
import { Poltawski_Nowy } from 'next/font/google';

const poltawskiNowy = Poltawski_Nowy({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <Image
          src="https://wallpapers.com/images/featured/grey-desktop-c2vlziggmax74ybq.jpg"
          alt="Lazy loaded Image"
          width={2000}
          height={500}
          loading="lazy"
        />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200/60 p-10">
        <h2 className={`${poltawskiNowy.className} text-slate-900 font-extrabold text-7xl text-center`}>Publish your passions, your way</h2>
        <p className={`${poltawskiNowy.className} mt-6 font-extrabold text-3xl text-slate-600 text-center`}>Create a unique and beautiful blog easily.</p>
      </div>
    </main>
  );
}