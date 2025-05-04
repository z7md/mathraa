import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ onSelect }: { onSelect: (lat: number, lng: number) => void }) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng.lat, e.latlng.lng);
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
};

const MapSelector = ({
  onSelect,
  fixedLocation,
}: {
  onSelect?: (lat: number, lng: number) => void;
  fixedLocation?: { lat: number; lng: number };
}) => {
  const center = fixedLocation || { lat: 24.7136, lng: 46.6753 };

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fixedLocation ? (
        <Marker position={[fixedLocation.lat, fixedLocation.lng]} icon={markerIcon} />
      ) : (
        <LocationMarker onSelect={onSelect!} />
      )}
    </MapContainer>
  );
};


export default MapSelector;
