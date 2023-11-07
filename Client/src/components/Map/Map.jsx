import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import style from './Map.module.css'

const Maps = () => {
	useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29zbm0yMyIsImEiOiJjbG9lY3Q2azgwZTg3Mmt0OGp2ZXB4dHA1In0.s2-3ffdaukdT-x7S1DudNg'; // Reemplaza con tu clave de acceso

    const map = new mapboxgl.Map({
      container: 'map', // El ID de un div donde se renderizará el mapa
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo de mapa
      center: [-66.32208629884008, -33.28284231251608], // Coordenadas del centro del mapa
      zoom: 15, // Nivel de zoom
    });

    // Añade marcadores, capas, etc., según tus necesidades
    new mapboxgl.Marker()
      .setLngLat([-66.32208629884008, -33.28284231251608])
      .addTo(map);

    return () => map.remove(); // Limpia el mapa al desmontar el componente.
  }, []);

  return <div id="map" className={style.map} ></div>;
};

export default Maps;