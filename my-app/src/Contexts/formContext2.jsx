import { createContext } from 'react';

export const Context = createContext(
    {
        location: {
          address: "",
          city: "",
          closeTimestamp: "",
          country: "",
          description: "",
          email: "",
          lastUpdated: "",
          latitude: "",
          longitude: "",
          name: "",
          notes: "",
          openTimestamp: "",
          parkingAvailable: "",
          phoneNumber: "",
          postalcode: "",
          state: "",
          timeZone: "",
          tiktokLink: "",
          youtubeLink: "",
          websiteURL: "",
          facebookURL: "",
          twitterLink: "",
          instagramHandle: "",
          additionalLinks: ""
        },
        contributor: {
          contributor_name: "",
          contributor_email: "",
          contributed_on: ""
        }
      }
      
);