import React, { useEffect, useState } from "react";

const MapView = () => {
  const [long, set_long] = useState();
  const [lat, set_lat] = useState();
  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError);
    } else {
      alert("Sorry, Geolocation is not supported by this browser.");
    }
  };

  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "denied") {
          alert(
            "Enable location permissions for this website in your browser settings."
          );
        }
      });
    } else {
      alert(
        "Unable to access your location. You can continue by submitting location manually."
      );
    }
  };

  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    set_lat(lat);
    set_long(long);
  };

  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=${lat},${long}&hl=es;&output=embed`;
  });

  console.log("lat", lat);
  console.log("log", long);

  return (
    <div>
      <iframe id="iframeId" className="map-container" title="map"></iframe>
    </div>
  );
};
export default MapView;
