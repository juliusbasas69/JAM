import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function TrustSection() {
  const items = [
    {
      title: "Trusted Quality",
      description:
        "We ensure all our second-hand branded items are carefully inspected for quality and authenticity.",
    },
    {
      title: "Affordable Prices",
      description:
        "Our products are priced fairly, making premium second-hand fashion accessible to everyone.",
    },
    {
      title: "Wide Selection",
      description:
        "We offer a variety of clothing, accessories, and shoes to suit different styles and preferences.",
    },
    {
      title: "Sustainable Choice",
      description:
        "By choosing pre-loved items, you contribute to reducing waste and supporting sustainable fashion.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We prioritize your happiness with reliable service, easy returns, and helpful support.",
    },
    {
      title: "Authenticity Guaranteed",
      description:
        "All items are verified to be genuine branded products, so you shop with confidence.",
    },
  ];

  return (
    <section className="py-16 bg-white text-gray-800 max-w-7xl m-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Affordable Branded Pre-Loved Fashion for Everyone
        </h2>
        <p className="text-gray-500 mb-12">
          We provide high-quality, branded second-hand collections at prices
          that everyone can afford — perfect for daily wear or even small
          businesses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <ShieldCheckIcon className="w-10 h-10 text-berry mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
