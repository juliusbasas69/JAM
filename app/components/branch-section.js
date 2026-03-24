"use client";

import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const branches = [
  {
    name: "Jam's Branded Collecltion",
    location: "Osmena Blvd",
    city: "Cebu",
    lat: 10.31089701637696,
    lng: 123.89288655391591,
  },
  {
    name: "Ayala Center Cebu",
    location: "Cebu Business Park",
    city: "Cebu",
    lat: 10.3176,
    lng: 123.9053,
  },
  {
    name: "SM City Cebu",
    location: "North Reclamation Area",
    city: "Cebu",
    lat: 10.3119,
    lng: 123.9185,
  },
  {
    name: "Fuente Osmena Circle",
    location: "Fuente Osmena",
    city: "Cebu",
    lat: 10.3103,
    lng: 123.8936,
  },
  {
    name: "SM Mall of Asia",
    location: "Pasay, Metro Manila",
    city: "Manila",
    lat: 14.5347,
    lng: 120.9822,
  },
  {
    name: "Greenbelt Ayala",
    location: "Makati, Metro Manila",
    city: "Manila",
    lat: 14.5526,
    lng: 121.0244,
  },
];

export default function BranchSection() {
  const [selected, setSelected] = useState(branches[0]);

  // Group branches by city
  const cities = [...new Set(branches.map((branch) => branch.city))];

  return (
    <section className="py-16 bg-gradient-to-br mt-10 from-gray-100 via-white to-gray-200 text-gray-800 max-w-7xl m-auto rounded-2xl">
      <div className="px-6">
        <h2 className="text-2xl font-semibold mb-2">Find a Branch</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Search by name or location to find the branch nearest to you.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT SIDE - LIST */}
          <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {cities.map((city, cityIndex) => (
              <div key={cityIndex}>
                <h3 className="text-lg font-semibold mb-2">{city}</h3>
                <div className="space-y-3">
                  {branches
                    .filter((branch) => branch.city === city)
                    .map((branch, index) => (
                      <div
                        key={index}
                        onClick={() => setSelected(branch)}
                        className={`flex flex-col gap-1 p-3 rounded-lg cursor-pointer border transition
                          ${
                            selected.name === branch.name
                              ? "bg-red-50 border-red-400"
                              : "bg-white hover:bg-gray-50"
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-5 h-5 text-red-500" />
                          <span className="text-sm font-medium">
                            {branch.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {branch.location}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - MAP */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              src={`https://maps.google.com/maps?q=${selected.lat},${selected.lng}&z=15&output=embed`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
