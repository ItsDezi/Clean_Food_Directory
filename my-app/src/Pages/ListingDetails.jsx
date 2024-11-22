function ListingDetails() {

    return (
      <>
      import React from 'react';

const LocationDetails = ({ location }) => {
  const {
    address,
    city,
    closeTimestamp,
    country,
    description,
    email,
    lastUpdated,
    latitude,
    longitude,
    name,
    notes,
    openTimestamp,
    parkingAvailable,
    phoneNumber,
    postalcode,
    state,
    timeZone,
    tiktokLink,
    youtubeLink,
    websiteURL,
    facebookURL,
    twitterLink,
    instagramHandle,
    additionalLinks,
  } = location;

  const formatDateTime = (timestamp) =>
    new Date(timestamp).toLocaleString();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1>{name}</h1>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Address:</strong> {address}, {city}, {state}, {postalcode}, {country}</p>
      <p><strong>Coordinates:</strong> {latitude}, {longitude}</p>
      <p><strong>Open Hours:</strong> {formatDateTime(openTimestamp)} - {formatDateTime(closeTimestamp)} ({timeZone})</p>
      <p><strong>Contact:</strong> <a href={`mailto:${email}`}>{email}</a>, {phoneNumber}</p>
      <p><strong>Parking Available:</strong> {parkingAvailable ? 'Yes' : 'No'}</p>
      <p><strong>Notes:</strong> {notes}</p>
      <p><strong>Last Updated:</strong> {lastUpdated}</p>
      <div>
        <h3>Links</h3>
        <ul>
          <li><a href={websiteURL} target="_blank" rel="noopener noreferrer">Website</a></li>
          <li><a href={facebookURL} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href={twitterLink} target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href={instagramHandle} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href={youtubeLink} target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href={tiktokLink} target="_blank" rel="noopener noreferrer">TikTok</a></li>
          <li>{additionalLinks}</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationDetails;

      </>
    );
  }
  
  export default ListingDetails;