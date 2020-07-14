import { useState, useEffect } from "react";
import axios from 'axios';

function useGetPuntos() {

   const [data,setData] = useState([]);
   const [error,setError] = useState([]);
   const [loader, setLoader] = useState(true);

   const cleanUp = () => {
        setData([]);
        setError([]);
        setLoader(false);
   }

   const obtenerDatos  = async () => {

       await axios.get(process.env.REACT_APP_API_PATH + "/points", {crossdomain:true})
        .then(res => {
            console.log(res.data);
        })

   }

   useEffect(() => {
       
       obtenerDatos();

       return () => {
           cleanUp();
       };

   }, []);

   return [data,error,loader];
}

export default useGetPuntos

