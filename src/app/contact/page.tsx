import React from "react";

export default function ContactPage() {
  return (
  <div className="w-full h-full px-4 bg-gradient-to-br from-yellow-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-red-200 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-red-200 via-yellow-100 to-transparent rounded-full blur-2xl opacity-30"></div>
      </div>
      <div className="relative w-full max-w-xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-10 border border-yellow-100 flex flex-col items-center gap-8">
          <h1 className="text-5xl font-extrabold text-red-600 mb-2 text-center">Contact Us</h1>
          <form className="w-full max-w-md flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-yellow-200 rounded px-4 py-2 focus:outline-none focus:border-red-500 bg-white/80" required />
            <input type="email" placeholder="Your Email" className="border border-yellow-200 rounded px-4 py-2 focus:outline-none focus:border-red-500 bg-white/80" required />
            <textarea placeholder="Your Message" className="border border-yellow-200 rounded px-4 py-2 focus:outline-none focus:border-red-500 bg-white/80" rows={4} required />
            <button type="submit" className="bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-yellow-500 transition">Send Message</button>
          </form>
          <div className="mt-4 text-center text-brown-700">
            <p className="text-lg">123 Pizza Street, Food City</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
            <p className="text-lg">Email: info@pizzarestaurant.com</p>
          </div>
        </div>
      </div>
  </div>
  );
}
