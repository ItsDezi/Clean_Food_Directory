/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import { getLocationById } from '../Services/apiService';
import { useParams } from 'react-router-dom';
import { template } from '../formDatatemplate';

function ListingDetails({ data }) {
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

  return (
    <>
    {loading ? (
      <h4>Loading...</h4> 

    ) : (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>{details.name}</h1>
      <p><strong>Description:</strong> {details.description}</p>
      <p><strong>Address:</strong> {details.address}, {details.city}, {details.state}, {details.postalcode}, {details.country}</p>
      <p><strong>Coordinates:</strong> {details.latitude}, {details.longitude}</p>
      {/* <p><strong>Open Hours:</strong> {formatDateTime(details.openTimestamp)} - {formatDateTime(details.closeTimestamp)} ({details.timeZone})</p> */}
      <p><strong>Contact:</strong> <a href={`mailto:${details.email}`}>{details.email}</a>, {details.phoneNumber}</p>
      <p><strong>Parking Available:</strong> {details.parkingAvailable ? 'Yes' : 'No'}</p>
      <p><strong>Notes:</strong> {details.notes}</p>
      <p><strong>Last Updated:</strong> {details.lastUpdated}</p>
      <div>
        <h3>Links</h3>
        <ul>
          <li><a href={details.websiteURL} target="_blank" rel="noopener noreferrer">Website</a></li>
          <li><a href={details.facebookURL} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href={details.twitterLink} target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href={details.instagramHandle} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={details.youtubeLink} target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href={details.tiktokLink} target="_blank" rel="noopener noreferrer">TikTok</a></li>
          <li>{details.additionalLinks}</li>
        </ul>
      </div>
    </div>
  )}
  </>
  );
};

  
  export default ListingDetails;