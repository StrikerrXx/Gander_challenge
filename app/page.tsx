"use client";

import { useState } from "react";
import { aircraftList } from "../data/aircraft";
import AircraftList from "../components/AircraftList";
import dynamic from "next/dynamic"; // For dynamic import of Leaflet

import type { Aircraft } from "../data/aircraft";

// Dynamically load the map so it only runs on the client
const AircraftMap = dynamic(() => import("../components/AircraftMap"), {
  ssr: false,
});

export default function Home() {
  const [tailFilter, setTailFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredAircraft = aircraftList.filter((plane) => {
    const matchesTail = plane.tailNumber.toLowerCase().includes(tailFilter.toLowerCase());
    const matchesModel = plane.model.toLowerCase().includes(modelFilter.toLowerCase());
    const matchesStatus = statusFilter ? plane.status === statusFilter : true;
    return matchesTail && matchesModel && matchesStatus;
  });

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 w-full max-w-4xl">

        <h1 className="text-3xl font-bold text-center sm:text-left">Aircraft Dashboard</h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Filter by tail number"
            value={tailFilter}
            onChange={(e) => setTailFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full bg-white text-black"
          />
          <input
            type="text"
            placeholder="Filter by model"
            value={modelFilter}
            onChange={(e) => setModelFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full bg-white text-black"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full bg-white text-black"
          >
            <option value="">All Statuses</option>
            <option value="available">Available</option>
            <option value="maintenance">Maintenance</option>
            <option value="aog">AOG</option>
          </select>
        </div>

        {/* Map */}
        <AircraftMap aircraft={filteredAircraft} />

        {/* Aircraft List */}
        <AircraftList aircraft={filteredAircraft} />
      </main>

      <footer className="row-start-3 text-sm text-gray-400 text-center">
        Built with Next.js and Tailwind
      </footer>
    </div>
  );
}
