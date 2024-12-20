"use client"

import { useState } from "react";
import { productsData } from "../datas/productsData";

export default function Gallery() {

    const [activeFilter, setActiveFilter] = useState<string>("tous");

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
    }

  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
        <h1 className="text-6xl font-bold text-center text-white mb-8 uppercase">
            Filtered<span className="text-pink-500">Gallery</span> 
        </h1>
        <div className="mb-12">
            <div className="flex justify-center max-width-[1000px] mx-auto border-b-2 border-pink-500">
                {["tous", "jeans", "tshirt", "chaussures"].map((filter) => (
                    <button
                        key={filter}
                        className={`px-6 py-2 font-medium ${activeFilter === filter ? "text-white bg-pink-500" : "text-white"} hover:text-pink-500`}
                        onClick={() => handleFilterChange(filter)}
                    >
                        {filter === "tous" ? "Tous" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                ))}
            </div>
        </div>
        <div className="max-width-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productsData.filter((product) => activeFilter === "tous" || product.category === activeFilter).map((product, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                    <img src={product.img} alt={product.title} className="w-full h-64 object-cover rounded-t-2xl" />
                    <div className="p-6">
                        <h6 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h6>
                        <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                        <button className="text-pink-500 font-medium hover:text-pink-600">En savoir plus</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
