import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Geocode from "react-geocode";

import '../styles/MapBox.css';

mapboxgl.accessToken = process.env.MAPBOX_KEY;

Geocode.setApiKey("AIzaSyDn-Zlc6aC9cHq8z1CxxSKMdbqd_4-bmDQ");
Geocode.setLanguage("en");
Geocode.enableDebug();

const MapBox = (props) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {

    let currLat;
    let currLon;
    let map;

    Geocode.fromAddress(props.location).then(
      response => {
        console.log("Running goecode")
        const { lat, lng } = response.results[0].geometry.location;
        currLat = lat;
        currLon = lng;
        console.log("Lat & lon: " + currLat, currLon);

        console.log("Map latlon: " + currLat, currLon)
        map = new mapboxgl.Map({
          container: mapContainerRef.current,
          // Other style options: https://docs.mapbox.com/api/maps/#styles
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [currLon, currLat],
          zoom: 12.5,
        });

        var marker1 = new mapboxgl.Marker()
          .setLngLat([currLon, currLat])
          .addTo(map);
      },
      error => {
        console.error("Geocode error: " + error);
      }
    )

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <script src='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js'></script>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
};

export default MapBox;

// Used this tutorial for the MapBox: https://dev.to/laney/react-mapbox-beginner-tutorial-2e35, https://docs.mapbox.com/mapbox-gl-js/example/add-a-marker/, and https://www.npmjs.com/package/react-geocode/v/0.2.2 for Geocoding