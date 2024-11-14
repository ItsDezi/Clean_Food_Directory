import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState, useEffect } from "react";
import { DivIcon, Icon, divIcon, map, point } from "leaflet";
import L from "leaflet";

function CoordinatesInput() {
  let [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  // let posChanger = (lat, lng) => {
  //   let pos = { ...position };
  //   pos.latitude = lat;
  //   pos.longitude = lng;
  //   setPosition(pos);
  // };
  useEffect(() => {
    // this hook will get called every time position state has changed
    console.log("Updated State", position);
  }, [position]);
  function LocationMarker() {
    let customIcon = L.icon({
      iconUrl: "https://www.svgrepo.com/show/74027/orange.svg",
      iconSize: [38, 95],
    });
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        //posChanger(lat, lng);
        setPosition({
           latitude: lat,
           longitude: lng,
         })

        //console.log(position);
      },
      locationfound(e) {

      },
    });

    return position.latitude !== 0 ? (
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
        icon={customIcon}
      />
    ) : null;
  }

  return (
    <div>
      <MapContainer
        className="map-container"
        center={[51.505, -0.09]}
        minZoom={2}
        zoom={13}
        scrollWheelZoom={true}
        maxBounds={[
          [85, -180],
          [-85, 180],
        ]}
      >
        <TileLayer
          noWrap={true}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
}
export default CoordinatesInput;
