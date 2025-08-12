import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div className="w-full h-full px-4 bg-gradient-to-br from-yellow-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-red-200 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-red-200 via-yellow-100 to-transparent rounded-full blur-2xl opacity-30"></div>
      </div>
      <div className="relative w-full max-w-xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-10 flex flex-col items-center gap-6 border border-yellow-100">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-orange-400 mb-2 animate-fade-in">Pizza Restaurant</h1>
          <p className="text-xl text-brown-700 font-medium mb-4 animate-fade-in delay-100">Delicious, fresh, and made with love.</p>
          <Link href="/menu" className="inline-block px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200">Order Now</Link>
        </div>
      </div>
  </div>
  );
}
