"use client";

import { useEffect, useState } from "react";
import { Aircraft, AircraftStatus } from "../data/aircraft";

type Props = {
  aircraft: Aircraft[];
};

export default function AircraftList({ aircraft }: Props) {
  const [statusMap, setStatusMap] = useState<Record<number, AircraftStatus>>({});

  useEffect(() => {
    const saved = localStorage.getItem("aircraftStatusMap");
    if (saved) {
      setStatusMap(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("aircraftStatusMap", JSON.stringify(statusMap));
  }, [statusMap]);

  const handleStatusChange = (id: number, newStatus: AircraftStatus) => {
    setStatusMap((prev) => ({ ...prev, [id]: newStatus }));
  };

  return (
    <div className="grid gap-4">
      {aircraft.map((plane) => {
        const currentStatus = statusMap[plane.id] || plane.status;

        return (
          <div
            key={plane.id}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-xl shadow bg-white dark:bg-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full"
          >
            <div className="flex flex-col">
              <p className="font-bold text-black dark:text-white">{plane.tailNumber}</p>
              <p className="text-sm text-gray-500">{plane.model}</p>
            </div>

            <div className="flex gap-2 items-center flex-wrap">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full text-white ${
                  currentStatus === "available"
                    ? "bg-green-500"
                    : currentStatus === "maintenance"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {currentStatus.toUpperCase()}
              </span>

              <select
                value={currentStatus}
                onChange={(e) =>
                  handleStatusChange(plane.id, e.target.value as AircraftStatus)
                }
                className="border border-gray-300 rounded p-1 text-sm bg-white text-black"
              >
                <option value="available">Available</option>
                <option value="maintenance">Maintenance</option>
                <option value="aog">AOG</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}

