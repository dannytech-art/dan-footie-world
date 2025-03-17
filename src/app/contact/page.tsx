"use client"
import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic here to handle form submission
    console.log(name, email, message);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <Head>
        <title>Contact Us - Danny&apos;s Footie World</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-8">
        Reach out to us with any questions or feedback you might have.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-primary"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-primary"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          rows={5}
          className="p-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white hover:bg-primary/90 rounded-md p-2 dark:text-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
