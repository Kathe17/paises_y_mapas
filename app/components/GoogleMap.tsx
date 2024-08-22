import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

declare type Library =
  | "core"
  | "maps"
  | "places"
  | "geocoding"
  | "routes"
  | "marker"
  | "geometry"
  | "elevation"
  | "streetView"
  | "journeySharing"
  | "drawing"
  | "visualization";

const libraries: Library[] = ["places"]; // Cargar la libreria places para geolocalizacion

interface GoogleMapProps {
  url: string;
  zoom?: number;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({
  url,
  zoom = 12, // Zoom por defecto
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "", // Cargar API key de la variable de entorno
    libraries,
  });

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  // Extraer las coordenadas de la URL de google maps utilizando una expresion regular
  const extractCoordsFromUrl = (
    url: string
  ): { lat: number; lng: number } | null => {
    const match = url.match(/\/@([^,]*),([^,]*)/);
    return match
      ? { lat: parseFloat(match[1]), lng: parseFloat(match[2]) }
      : null;
  };

  const initialCoordinates = extractCoordsFromUrl(url); // Use a default center if coordinates are not provided

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        center={initialCoordinates ?? { lat: 4.624335, lng: -74.063644 }}
      >
        <Marker
          position={initialCoordinates ?? { lat: 4.624335, lng: -74.063644 }}
        />
      </GoogleMap>
    </>
  );
};

export default GoogleMapComponent;
