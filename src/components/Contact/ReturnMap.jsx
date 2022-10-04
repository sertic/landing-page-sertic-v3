import React, { useRef, useEffect } from 'react';
// import '../../css/map.css';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbGExMWkiLCJhIjoiY2t3Nmg4dzdqNzNndjJ2bXRxN29rcGY4byJ9.NEWRnqXP-98PS7S6lxcyRQ';

const initialPoint = [
    -60.649725547146076, 
    -32.95157218131647
  ];

export const ReturnMap = () => {
    const mapRef = useRef();
    const map = useRef();

    useEffect( () => {
        const newMap = new mapboxgl.Map({
            container             : mapRef.current,
            center                : initialPoint,
            style                 : 'mapbox://styles/mapbox/streets-v11',
            zoom                  : 15,
            cooperativeGestures   : true,
            doubleClickZoom       : true,
            dragPan               : true,
        })

        map.current = newMap;
    },[ initialPoint ]);

    useEffect(() => {
        const marker = new mapboxgl.Marker();
        
          marker
            .setLngLat(initialPoint)
            .addTo( map.current )
    }, [ initialPoint, map ]);

    return (
        <div
          ref={ mapRef }
          className='map'
        />
    )
}
