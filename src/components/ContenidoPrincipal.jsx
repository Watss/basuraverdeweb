import React, {useEffect, useState, useCallback} from 'react';
//import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


function ContenidoPrincipal(){

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBUJK6B9qfNDb-xcaZJSSXFt1Eg_BLo9Io"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )



}

export default ContenidoPrincipal