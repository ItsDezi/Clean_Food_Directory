/* eslint-disable react/react-in-jsx-scope */
//import "./styles.css";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { DivIcon, Icon, divIcon, map, point } from "leaflet";
import L from 'leaflet';
import { getLocationPreviews } from '../Services/apiService';
import { useEffect, useState } from 'react';

export default function Map() {
  const [loading, setLoading] = useState(false);
    // markers
    const [markers, setMarkers] = useState([]);
    type marker = {
      latitude: number,
      longitude: number,
      name: String
        // geocode:[number, number],
        // popUp: String
    }
    const getAllPreviews = async() => {
      setLoading(true);
      const tmp = await getLocationPreviews();
      setMarkers(tmp);
      // for(int i = 0; i < tmp.length(); i++)
      // {

      // }
      console.log("tmp: ", tmp);
      setLoading(false);
        }

    useEffect(() => {
      getAllPreviews();
      console.log("bloopy");
    }, []);
//let markers:marker[] = [];
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
      {loading ? (
        <h4>Loading...</h4> 

      ) : (
<MapContainer className="map-container" center={[42, -96.5]} minZoom={2} zoom={5} scrollWheelZoom={true} maxBounds={[[85,-180],[-85, 180]]}>
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
          <Marker position={[marker.latitude, marker.longitude]} icon={customIcon}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
  
</MapContainer>
      )}

</div>
  );
}
