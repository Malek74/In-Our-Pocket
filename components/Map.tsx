import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const [markers, setMarkers] = useState([
    { lat: 59.955413, lng: 30.337844 },
    { lat: 59.955413, lng: 30.337844 },
  ]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
        defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
        defaultZoom={11}
      >
        {markers.map((marker) => (
          <Marker lat={marker.lat} lng={marker.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
