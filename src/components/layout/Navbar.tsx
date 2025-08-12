import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center px-4 py-4 mb-8 sticky top-0 z-30">
      <div className="backdrop-blur-lg bg-white/70 border border-yellow-100 rounded-full shadow-lg flex gap-8 px-8 py-3">
  <Link href="/" className="font-semibold text-lg text-red-600 transition hover:text-yellow-500 hover:scale-105 hover:shadow-md px-2">Home</Link>
  <Link href="/menu" className="font-semibold text-lg text-red-600 transition hover:text-yellow-500 hover:scale-105 hover:shadow-md px-2">Menu</Link>
  <Link href="/contact" className="font-semibold text-lg text-red-600 transition hover:text-yellow-500 hover:scale-105 hover:shadow-md px-2">Contact</Link>
      </div>
    </nav>
  );
}
