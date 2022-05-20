import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const CustomMarker = ({ position, children, zoom }) => {
    const map = useMap();
  
    const markerRef = useRef(null);
  
    useEffect(() => {
      try {
        if (zoom >= 5 && markerRef.current !== null && !markerRef.current.isPopupOpen()) {
          markerRef.current.openPopup();
        } 
      } catch (error) {}
    }, [zoom]);

    return (
      <Marker ref={markerRef} position={position}>
        <Popup>{children}</Popup>
      </Marker>
    );
  };
  
  export default CustomMarker;
