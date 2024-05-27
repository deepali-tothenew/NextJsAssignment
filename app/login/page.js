"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in and redirect if necessary
    if (localStorage.getItem("token") != null) {
        router.push('/');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Email and Password are required.");
      return;
    }

    try {
      const res = await fetch(`api/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      let response = await res.json();

      if (res.ok && (res.status === 200 || res.status === 201)) {
        localStorage.setItem("token", response.token);
        window.location.href = "/";
      } else {
        alert(response.message);
        console.error('Login failed');
      }
    } catch (error) {
      alert(response.message);
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-8">
    <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white p-8">Login</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2">
        <label htmlFor="email"><b>Email</b></label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' className="border border-slate-500 px-8 py-2" />
        <label htmlFor="password"><b>Password</b></label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' className="border border-slate-500 px-8 py-2" />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-full">Login</button>
    </form>
    <p><Link href="/signUp">Not a user, Sign Up</Link></p>
    </main>
  );
};

export default LoginForm;