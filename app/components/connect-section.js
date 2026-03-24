import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ConnectSection() {
  return (
    <section className="py-16 mt-10 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>
        <p className="text-gray-500 mb-8">
          Stay updated on our latest collections, branch openings, and special
          promos. Join our Ukay community and follow our journey!
        </p>

        {/* Social Media Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <div className="flex gap-2 items-center text-sm">
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={32}
              height={32}
              className="bg-berry p-1 rounded-md"
            />
            {/* <span className="text-gray-500">jamsbrandedcollection</span> */}
          </div>
          <div className="flex gap-2 items-center text-sm">
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="bg-berry p-1 rounded-md"
            />
            {/* <span className="text-gray-500">jamsbrandedcollection</span> */}
          </div>
          <div className="flex gap-2 items-center text-sm">
            <Image
              src="/icons/tiktok.svg"
              alt="TikTok"
              width={32}
              height={32}
              className="bg-berry p-1 rounded-md"
            />
            {/* <span className="text-gray-500">jamsbrandedcollection</span> */}
          </div>
        </div>

        {/* Optional Newsletter / Updates */}
        <p className="text-gray-500 text-sm">
          Or sign up for our newsletter to get updates directly in your inbox.
        </p>
      </div>
    </section>
  );
}
