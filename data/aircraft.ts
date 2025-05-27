export type AircraftStatus = "available" | "maintenance" | "aog";

export interface Aircraft {
  id: number;
  tailNumber: string;
  model: string;
  status: AircraftStatus;
  location: [number, number]; // [latitude, longitude]
}
// just took the location coordinates from various cities
export const aircraftList: Aircraft[] = [
  {
    id: 1,
    tailNumber: "N12345",
    model: "Gulfstream G500",
    status: "available",
    location: [37.7749, -122.2194], // San Francisco
  },
  {
    id: 2,
    tailNumber: "N67890",
    model: "Cessna Citation X",
    status: "maintenance",
    location: [34.0522, -118.5437], // Los Angeles
  },
  {
    id: 3,
    tailNumber: "N24680",
    model: "Embraer Phenom 300",
    status: "aog",
    location: [40.7128, -74.106], // New York
  },
  {
    id: 4,
    tailNumber: "N54321",
    model: "Learjet 75",
    status: "available",
    location: [25.7617, -80.1218], // Miami
  },
  {
    id: 5,
    tailNumber: "N98765",
    model: "Dassault Falcon 7X",
    status: "maintenance",
    location: [41.8781, -87.6298], // Chicago
  },
];
