import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L, { Map } from "leaflet"; // Import Map type from leaflet
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Ensure Geocoder CSS is loaded

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ onSelect }: { onSelect: (lat: number, lng: number) => void }) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  // Initialize map events to handle click, dblclick, and locationfound
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng); // Set the position when the map is clicked
      map.flyTo(e.latlng, map.getZoom()); // Fly to the clicked position
      onSelect(e.latlng.lat, e.latlng.lng); // Send the clicked position to parent component
    },
    dblclick() {
      map.locate(); // Trigger map locate on double-click
    },
    locationfound(e) {
      setPosition(e.latlng); // Set the position when the location is found
      map.flyTo(e.latlng, map.getZoom()); // Fly to the found location
      onSelect(e.latlng.lat, e.latlng.lng); // Send the found location to parent component
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const MapSelector = ({
  onSelect,
  fixedLocation,
}: {
  onSelect?: (lat: number, lng: number) => void;
  fixedLocation?: { lat: number; lng: number };
}) => {
  const center = fixedLocation || { lat: 26.32599, lng: 43.97497 }; // Default center if no fixedLocation
  const mapRef = useRef<Map | null>(null); // Create a ref to hold the map instance

  // Effect to initialize geocoder control on the map
  // useEffect(() => {
  //   if (mapRef.current) {
  //     // Initialize the geocoder control correctly using L.Control.Geocoder
  //     const geocoder = new L.Control.Geocoder() // Use the correct initialization
  //       .on("markgeocode", function (e: any) {
  //         const latLng = e.geocode.center; // Get the center of the geocoded location
  //         if (onSelect) onSelect(latLng.lat, latLng.lng); // Update the location when a location is selected from the geocoder
  //       })
  //       .addTo(mapRef.current); // Add the geocoder to the map

  //     // Position the geocoder control
  //     geocoder.setPosition("topright"); // Adjust the position of the geocoder control
  //   }
  // }, [onSelect]); // Only run the effect if onSelect changes

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      whenReady={() => { 
        if (mapRef.current) {
          mapRef.current.locate(); // Trigger the location automatically when the map is ready
        }
      }} // Fix: Use whenReady and no parameters
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
