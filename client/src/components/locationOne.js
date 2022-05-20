import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import CustomMarker from "./marker";
import ModalOpen from "./modal";

function LocationOne(props) {
  const {
    temp, 
    lon, 
    name,
    position, 
    getWether,
    condition,
    certainCity
  } = props
  const [cordinates, setCordinates] = useState({ latitude: position.latitude, longitude: position.longitude });
  
  const map = useMapEvents({
    click(event) {
      // console.log(event.target._zoom)
      const { lat, lng } = event.latlng;
      setCordinates({
        latitude: lat,
        longitude: lng,
      });
      getWether(lat, lng)
    },
  });

  if(condition === undefined || temp === undefined || name === undefined){
    return null
  } 

  let center = [cordinates.latitude, cordinates.longitude]
  
  return (
      <div>
        <CustomMarker
          position={center}
          // interactive={true}
        >
          + {temp.temp}
          <p>Город/населенный пункт {name.locality.name}</p>
          <p>облачность {condition.condition}</p>
          <>
            <ModalOpen 
              temp={temp.temp}
              name={name.locality.name}
              condition={condition.condition}
            />
          </>
        </CustomMarker>
      </div>
  );
}

export default LocationOne;
