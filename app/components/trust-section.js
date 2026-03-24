import React from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid"; // Using Heroicons for the shield icon

export default function TrustSection() {
  const items = [
    {
      title: "Tiwala",
      description:
        "Tapat at malinaw kami sa kalidad, presyo, at pinanggalingan ng aming mga branded ukay items.",
    },
    {
      title: "Tiwala",
      description:
        "Tapat at malinaw kami sa kalidad, presyo, at pinanggalingan ng aming mga branded ukay items.",
    },
    {
      title: "Tiwala",
      description:
        "Tapat at malinaw kami sa kalidad, presyo, at pinanggalingan ng aming mga branded ukay items.",
    },
    {
      title: "Tiwala",
      description:
        "Tapat at malinaw kami sa kalidad, presyo, at pinanggalingan ng aming mga branded ukay items.",
    },
    {
      title: "Tiwala",
      description:
        "Tapat at malinaw kami sa kalidad, presyo, at pinanggalingan ng aming mga branded ukay items.",
    },
    {
      title: "Tiwala",
      description:
        "Tapat at malinaw kami sa kalidad, presyo, at pinanggalingan ng aming mga branded ukay items.",
    },
  ];

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Abot-Kayang Branded Ukay para sa Lahat
        </h2>
        <p className="text-gray-500 mb-12">
          Nagbigay kami ng de-kalidad at branded na ukay-ukay collections sa
          presyong kaya ng bawat Pilipino — swak sa araw-araw at sa negosyo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-left text-left">
              <ShieldCheckIcon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
