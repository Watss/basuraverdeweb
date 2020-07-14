import React, {useEffect, useState, useCallback} from 'react';
//import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
        googleMapsApiKey="AIzaSyBKAoqWSiOWp8NWLTw1A5P0v2PlPwUJ9kU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
         
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )



}

export default ContenidoPrincipal