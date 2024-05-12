import React, { FC, useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 30.04,
  lng: 31.2357,
};

const MapComponent: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBk6aSIkL9Cyd4XeJaIBdIez1UKTefSzaY",
  });
  const [position, setPosition] = useState<google.maps.LatLngLiteral>({
    lat: 30.04,
    lng: 31.2357,
  });

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const performNearbySearch = useCallback(
    async (map: google.maps.Map, location: google.maps.LatLng) => {
      if (isLoaded) {
        const request = {
          location: location,
          radius: 15, // Search radius in meters (adjust as needed)
        };

        const PlacesLibrary = (await google.maps.importLibrary(
          "places"
        )) as google.maps.PlacesLibrary;
        const PlacesService = new PlacesLibrary.PlacesService(map);
        PlacesService.nearbySearch(
          request,
          (results: any, status: google.maps.places.PlacesServiceStatus) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (let index = 0; index < results.length; index++) {
                const element = results[index];
                if (element.business_status) {
                  console.log(element);
                  setSelectedPlace(element);
                  break;
                }
              }
              // You can display markers or customize visuals for nearby places here
            }
          }
        );
      }
    },
    [isLoaded]
  );

  const onLoad = useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);

  const handleDragEnd = useCallback(
    async (e: any) => {
      const lat = e.latLng?.lat() || 0;
      const lng = e.latLng?.lng() || 0;
      setPosition({ lat, lng });
      if (map) performNearbySearch(map, e.latLng);
    },
    [map, performNearbySearch]
  );

  return isLoaded ? (
    <span className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-row gap-3">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onClick={(e) => handleDragEnd(e)}
      >
        <Marker
          position={position}
          draggable={true}
          onDragEnd={handleDragEnd}
        />
      </GoogleMap>
      {selectedPlace && (
        <Card className="w-[200px]">
          <CardHeader>
            <p className="text-center">
              {"Selected Location Name: " + selectedPlace.name}
            </p>
          </CardHeader>
          <CardBody>
            {"Selected Location Address: " + selectedPlace.vicinity}
          </CardBody>
        </Card>
      )}
    </span>
  ) : (
    <></>
  );
};

export default MapComponent;
