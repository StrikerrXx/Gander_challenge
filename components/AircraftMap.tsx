"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Aircraft } from "../data/aircraft";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue with Leaflet in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

type Props = {
  aircraft: Aircraft[];
};

export default function AircraftMap({ aircraft }: Props) {
  return (
    <MapContainer
      center={[39.8283, -98.5795]} // center of USA
      zoom={4}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {aircraft.map((plane) => (
        <Marker position={plane.location} key={plane.id}>
          <Popup>
            <strong>{plane.tailNumber}</strong>
            <br />
            {plane.model}
            <br />
            Status: {plane.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
