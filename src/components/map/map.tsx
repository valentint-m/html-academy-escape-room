import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { DefaultCityCoords, UrlMarker } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';

type MapProps = {
  locations: Array<[number, number]>;
  selectedPoint: [number, number] | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedCustomIcon = new Icon({
  iconUrl: UrlMarker.Selected,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {locations, selectedPoint} = props;
  const mapRef = useRef(null);
  const defaultCoords = DefaultCityCoords;
  const map = useMap({mapRef, defaultCoords});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      locations.forEach((coords) => {
        const marker = new Marker({
          lat: coords[0],
          lng: coords[1]
        });

        marker
          .setIcon(
            selectedPoint !== undefined && coords[0] === selectedPoint[0] && coords[1] === selectedPoint[1]
              ? selectedCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, locations, selectedPoint]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
