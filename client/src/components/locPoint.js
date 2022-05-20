import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import CustomMarker from "./marker";
import ModalOpen from "./modal";

const LocPoint = (props) => {
  const {cordinate, temp, name, condition, zoom} = props
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(4);

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });

  if(condition === undefined || temp === undefined || name === undefined){
    return null
  } 

  let center = [cordinate.lat, cordinate.lon]

    return (
      <>
        <CustomMarker
          position={center}
          zoom={zoomLevel}
        >
            + {temp.temp}
            <p>Город/населенный пункт {name.locality.name}</p>
            <p>Облачность {condition.condition}</p>
          <>
            <ModalOpen 
              temp={temp.temp}
              name={name.locality.name}
              condition={condition.condition}
            />
          </>
        </CustomMarker>
        </>
    )
}

export default LocPoint
