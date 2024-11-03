//import "./styles.css";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { DivIcon, Icon, divIcon, map, point } from "leaflet";
import L from 'leaflet';


export default function Map() {
    // markers
    type marker = {
        geocode:[number, number],
        popUp: String
    }
const markers:marker[] = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];
    // create custom icon
let customIcon = L.icon({
    iconUrl: "https://www.svgrepo.com/show/74027/orange.svg",
    iconSize: [38, 95],
});
    // custom cluster icon
const createClusterCustomIcon = function (this:any, cluster:any) {
    return new DivIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };
  return (
    <div className='map-container-container'>
<MapContainer className="map-container" center={[51.505, -0.09]} minZoom={2} zoom={13} scrollWheelZoom={true} maxBounds={[[85,-180],[-85, 180]]}>
  <TileLayer noWrap={true}
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
  
</MapContainer>
</div>
  );
}
