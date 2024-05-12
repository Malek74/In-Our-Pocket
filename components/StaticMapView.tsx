import React, { FC, useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};
const schoolCoords = {
  lat: 29.98683213862156,
  lng: 31.441326141357422,
};
const hospitalCoords = {
  lat: 30.01870342714974,
  lng: 31.43436599752531,
};
const orgCoords = {
  lat: 30.01052747957013,
  lng: 31.340383323992935,
};
interface StaticMapProps {
  variant: "school" | "hospital" | "org";
}
const StaticMapView: FC<StaticMapProps> = ({ variant }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBk6aSIkL9Cyd4XeJaIBdIez1UKTefSzaY",
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);

  return isLoaded ? (
    <span className="border border-gray-300 rounded-lg shadow-md p-4 max-w-[432px] bg-white">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          variant == "school"
            ? schoolCoords
            : variant == "hospital"
            ? hospitalCoords
            : variant == "org"
            ? orgCoords
            : { lat: 0, lng: 0 }
        }
        zoom={15}
        onLoad={onLoad}
      >
        <Marker
          position={
            variant == "school"
              ? schoolCoords
              : variant == "hospital"
              ? hospitalCoords
              : variant == "org"
              ? orgCoords
              : { lat: 0, lng: 0 }
          }
          draggable={false}
        />
      </GoogleMap>
    </span>
  ) : (
    <></>
  );
};

export default StaticMapView;
