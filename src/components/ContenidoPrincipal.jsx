import React, {useEffect, useState, useCallback} from 'react';
import  useGetPuntos  from '../hooks/getPuntos.js';
import { Button } from '@material-ui/core';
import { mapStyles } from "../stylesMap/mapStyle";
import iconoMarcador32 from "../img/iconMarker32.png";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

const center = {
  lat:  -36.6124541,
  lng:  -72.1212213
};


function ContenidoPrincipal(){


    const [data, loader, error] = useGetPuntos();


    const [map, setMap] = useState(null)
    
    const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])

    const cargarMarcadores = async () => {
     
    };

    const iconMarker32 = {
      url : iconoMarcador32
    };

    const optionsMap = {
      styles: mapStyles,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: "9"
      },
      mapTypeControlOptions: {
        position: "3"
      },
      backgroundColor: "#f5f5f5",
      gestureHandling: "greedy",
      clickableIcons: false
    };
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])

    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY}
        
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
         onLoad={cargarMarcadores}
          options={optionsMap}
          mapTypeId="terrain"
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
        <Marker   title="prueba coso" position={center} icon={iconMarker32} />
        </GoogleMap>
      </LoadScript>
    )



}

export default ContenidoPrincipal