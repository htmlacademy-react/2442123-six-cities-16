import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup, LatLngBounds, LatLngTuple } from 'leaflet';
import useMap from '../../hooks/use-map';
import { OfferCardType, City } from '../../types/offer-type';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

type MapProps = {
  city: City;
  offers: OfferCardType[];
  activeOffer?: OfferCardType | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ city, offers, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      // Создаем bounds с помощью массива координат города
      const cityCoords: LatLngTuple = [city.location.latitude, city.location.longitude];
      const bounds = new LatLngBounds(cityCoords, cityCoords);

      offers.forEach((offer) => {
        const offerCoords: LatLngTuple = [offer.location.latitude, offer.location.longitude];
        const marker = new Marker(offerCoords);

        marker
          .setIcon(
            activeOffer !== undefined && activeOffer !== null && offer.id === activeOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

        bounds.extend(offerCoords);
      });

      map.fitBounds(bounds, { padding: [50, 50] });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, offers, activeOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
