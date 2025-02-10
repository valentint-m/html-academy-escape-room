import { MutableRefObject, useState, useRef, useEffect } from 'react';
import { Map, TileLayer } from 'leaflet';
import { DEFAULT_ZOOM } from '../const';

type UseMapParameters = {
  mapRef: MutableRefObject<HTMLElement | null>;
  defaultCoords: [number, number];
}

function useMap ({mapRef, defaultCoords}: UseMapParameters): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && defaultCoords[0] !== 0) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: defaultCoords[0],
          lng: defaultCoords[1]
        },
        zoom: DEFAULT_ZOOM,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, defaultCoords]);

  return map;
}

export default useMap;
