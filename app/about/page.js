export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="mt-4 max-w-3xl space-y-6">
      <p>Welcome to Ink & Insight, where passion meets expression!</p>

      <p>At Ink & Insight, we believe in the power of words to inspire, inform, and connect. Whether you&#39;re seeking captivating stories, insightful commentary, or practical advice, you&#39;ve come to the right place.</p>

<p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Who We Are:</p>

<p>We are a diverse team of writers, creators, and enthusiasts, united by our love for sharing ideas and sparking conversations. From seasoned professionals to budding talents, each member of our team brings a unique perspective and voice to our platform.</p>

<p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">What We Do:</p>

<p>Through our blog, we aim to provide a rich tapestry of content that reflects the myriad interests and passions of our readers. From thought-provoking essays to handy how-to guides, from heartwarming narratives to cutting-edge trends, we cover it all. Our commitment to quality ensures that every piece we publish is crafted with care and attention to detail.</p>

<p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">Why We Do It:</p>

<p>Simply put, we&#39;re here to make a difference. We believe in the transformative power of knowledge and the importance of community. By fostering meaningful conversations and fostering connections, we strive to empower our readers to live more informed, inspired, and fulfilling lives.</p>

<p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">Join Us:</p>

<p>Whether you&#39;re a seasoned reader or a newcomer to our site, we invite you to explore, engage, and connect with us. Dive into our archives, join the discussion in the comments section, or reach out to us directly. Your voice matters, and we&#39;re here to listen.</p>

<p>Thank you for being a part of the Ink & Insight community. Together, let&#39;s embark on a journey of discovery, learning, and growth.</p>
      </div>
    </main>
  );
}

  // Define revalidation time
  export const revalidate = 10; // Revalidate the page every 10 seconds
