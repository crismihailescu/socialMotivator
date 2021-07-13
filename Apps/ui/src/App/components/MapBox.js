import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY3JpczEyd2U0IiwiYSI6ImNrcjF0YWE4ZTEwcm4yc3J4bHg3aGg5M28ifQ.0gL0Gp5H7E5vkabdVehgmw'; // Set your mapbox token here

function Root() {

  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

document.body.style.margin = 0;
render(<Root />, document.body.appendChild(document.createElement('div')));

export default Root;
