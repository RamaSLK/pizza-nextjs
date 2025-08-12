import React from "react";

const pizzas = [
  {
    name: "Margherita",
    description: "Classic pizza with tomato, mozzarella, and basil.",
    image: "/public/file.svg",
  },
  {
    name: "Pepperoni",
    description: "Spicy pepperoni, mozzarella, and tomato sauce.",
    image: "/public/file.svg",
  },
  {
    name: "Veggie",
    description: "Seasonal vegetables, mozzarella, and tomato sauce.",
    image: "/public/file.svg",
  },
];

export default function MenuPage() {
  return (
  <div className="w-full h-full px-4 bg-gradient-to-br from-yellow-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-red-200 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-red-200 via-yellow-100 to-transparent rounded-full blur-2xl opacity-30"></div>
      </div>
      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl p-10 border border-yellow-100">
          <h1 className="text-5xl font-extrabold text-red-600 mb-8 text-center">Our Menu</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pizzas.map((pizza) => (
              <div key={pizza.name} className="bg-white/80 rounded-xl shadow p-6 flex flex-col items-center border border-gray-100">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-yellow-300 via-red-200 to-orange-200 flex items-center justify-center">
                  <span className="text-3xl font-bold text-red-500">🍕</span>
                </div>
                <h2 className="text-xl font-semibold text-red-700 mb-2">{pizza.name}</h2>
                <p className="text-brown-700 text-center">{pizza.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  </div>
  );
}
