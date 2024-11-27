/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { getLocationById } from '../Services/apiService';
import { useParams } from 'react-router-dom';
import { template } from '../formDatatemplate';
import { FaInstagram, FaFacebookSquare, FaYoutubeSquare, FaLink } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import icon from '../Assets/clean_food_directory_logo.png';
function ListingDetails({ data }) {
  const iconSize = {size:40};
  const {markerId} = useParams();
  const [loading, setLoading] = useState(false);
  const [ details, setDetails ] = useState(template.location);// = template.location;
  const getDetails = async() => {
    setLoading(true);
    const tmp = await getLocationById(markerId);
    setDetails(tmp);
    console.log("tmp: ", tmp);
    setLoading(false);
      }
      useEffect(() => {
        getDetails();
        console.log("ListingDetails id value", markerId);
        console.log("get Details is being called!");
      }, []);
      let customIcon = L.icon({
        iconUrl: icon,
        iconSize: [75, 75]
      });
      function formatDate(date) {
        const index = date.indexOf('T');
        return date.substring(0, index);
      }
  return (
    <div className="details-container-container">
    {loading ? (
      <h4>Loading...</h4> 

    ) : (
    <div className="details-container" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>{details.name}</h1>
      <MapContainer
        className="map-container-contribute"
        style={{width:'100%'}}
        center={[details.latitude, details.longitude]}
        minZoom={2}
        zoom={12}
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

        <Marker position={[details.latitude, details.longitude]} interactive={false} icon={customIcon}/>
      </MapContainer>
      <span><strong>Description: </strong> {details.description}</span>
      <span><strong>Address: </strong>{details.address}, {details.city}, {details.state}, {details.postalcode}, {details.country}</span>
      <span><strong>Coordinates: </strong>{details.latitude}, {details.longitude}</span>
      <span><strong>Email: </strong><a className="color:black" href={`mailto:${details.email}`}>{details.email}</a> </span> 
      <span><strong>Phone Number: </strong>{details.phoneNumber}</span>
      <span><strong>Parking Available: </strong>{details.parkingAvailable ? 'Yes' : 'No'}</span>
      {/* <span><strong>Notes: </strong>{details.notes}</span> */}
      <span><strong>Last Updated: </strong>{formatDate(details.lastUpdated)}</span>
      <div>
        <h3>Links</h3>
        <ul style={{display:'inline-flex', }}>
          <li><a href={details.websiteURL} target="_blank" rel="noopener noreferrer"><FaLink size={iconSize.size}/></a></li>
          <li><a href={details.facebookURL} target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={iconSize.size}/></a></li>
          <li><a href={details.twitterLink} target="_blank" rel="noopener noreferrer"><FaSquareXTwitter size={iconSize.size}/></a></li>
          <li><a href={details.instagramHandle} target="_blank" rel="noopener noreferrer"><FaInstagram size={iconSize.size}/></a></li>
          <li><a href={details.youtubeLink} target="_blank" rel="noopener noreferrer"><FaYoutubeSquare size={iconSize.size}/></a></li>
          <li><a href={details.tiktokLink} target="_blank" rel="noopener noreferrer"><AiFillTikTok size={iconSize.size}/></a></li>
          <li>{details.additionalLinks}</li>
        </ul>
      </div>
    </div>
  )}
  </div>
  );
};

  
  export default ListingDetails;