import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import './Map.css';
import L from 'leaflet';
import LocationOne from "./locationOne";
import LocPoint from "./locPoint";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

function LocationMarker(props) {
  const { certainCity, getWether, position, city, bigsCity} = props
  const [state, setState] = useState({lat: 53.702868, lng: 35.530865, zoom: 4})
  let center = [state.lat, state.lng]

  return (
      <MapContainer center={center} zoom={state.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { 
        certainCity.map((el) => {
          return (
            <LocationOne
              key={el.id}
              temp={el.fact}
              condition={el.fact}
              name={el.geo_object}
              // lon={lon}
              position={position}
              getWether={getWether}
            />
          )
        }) }
        {bigsCity.map((item) => {
          return (
            <LocPoint
              key={item.id}
              zoom={state.zoom}
              cordinate={item.info}
              temp={item.fact}
              name={item.geo_object}
              condition={item.fact}
              city={city}
            />
          )
        })}
      </MapContainer>
  )
}

export default LocationMarker;
