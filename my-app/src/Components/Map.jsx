/* eslint-disable react/react-in-jsx-scope */
//import "./styles.css";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { DivIcon, Icon, divIcon, map, point } from "leaflet";
import L from 'leaflet';
import { getLocationPreviews } from '../Services/apiService';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../Assets/clean_food_directory_logo.png';
import { HiArrowRight } from "react-icons/hi";

export default function Map() {
  const [loading, setLoading] = useState(false);
    // markers
    const [markers, setMarkers] = useState([]);
    const [ apiError, setApiError ] = useState();
    type marker = {
      latitude: number,
      longitude: number,
      name: String,
      id: number
        // geocode:[number, number],
        // popUp: String
    }
    const getAllPreviews = async() => {
      setLoading(true);
      const tmp = await getLocationPreviews();
      console.log("tmp", tmp);
      if(typeof tmp !== "undefined")
      {
      setMarkers(tmp);

      console.log("tmp: ", tmp);
      setLoading(false);
      }
      else{
        console.log("Failed to fetch location previews...")
        setApiError(true);
        setLoading(false);
        alert("There's been an error populating the map.");
      }
        }

    useEffect(() => {
      getAllPreviews();
      console.log("bloopy");
    }, []);
//let markers:marker[] = [];
    // create custom icon
let customIcon = L.icon({
    iconUrl: icon,
    iconSize: [95, 95],
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
            <Popup>
            <Link to={`/details/${marker.id}`}>
              <a className='popup-text'>{marker.name} <HiArrowRight/> </a>
            </Link>
              </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
  
</MapContainer>
      )}

</div>
  );
}
