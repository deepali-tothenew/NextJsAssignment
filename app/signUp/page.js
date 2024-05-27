"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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

    if (!formData.name || !formData.email || !formData.password) {
      alert("Name, Email and Password are required.");
      return;
    }

    try {
      const res = await fetch(`api/signUp`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        alert(response.message);
        console.error('Failed to create a user');
      }
    } catch (error) {
      alert(response.message);
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between p-8">
    <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white p-8">Sign Up</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/2">
        <label htmlFor="name"><b>Name</b></label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' className="border border-slate-500 px-8 py-2" />
        <label htmlFor="email"><b>Email</b></label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' className="border border-slate-500 px-8 py-2" />
        <label htmlFor="password"><b>Password</b></label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' className="border border-slate-500 px-8 py-2" />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-full">Register</button>
    </form>
    <p><Link href="/login">Already a user, Login</Link></p>
    </main>
  );
};

export default RegisterForm;