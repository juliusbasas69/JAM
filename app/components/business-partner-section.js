"use client";

import Image from "next/image";

const partners = [
  {
    name: "A & E Garms",
    logo: "/images/aegarms.png",
  },
  // Add more anytime
];

export default function BusinessPartnerCategory() {
  return (
    <section className="w-full py-10 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-6">Business Partners</h2>

      <div className="flex justify-center">
        <div className="flex gap-6 overflow-x-auto px-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="min-w-[120px] flex flex-col items-center"
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden border">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>

              <p className="mt-2 text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
