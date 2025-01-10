import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_PREFIX}`;

export const uploadData = async (formData) => {
    try {
      const response = await axios.post(API_URL + "contribute", formData);
      return response.data;
    } catch (error) {
      console.error('Error posting this listing: \n', error); 
      //throw error;
    }
  }

  export const getLocationPreviews = async () => {
    const response = await axios.get(API_URL)
    .then(response => {
      console.log("apiService", response.data);
      return(response.data);
    }, error => {
      console.log(error);
    });
    console.log("response", response);
    return response;
  }

  export const getLocationById = async (id) => {
    console.log("id in apiService is!", id);
    const response = await axios.get(API_URL + `details?markerId=${id}`)
    .then(response => {
      console.log("apiService for location details", response.data);
      return(response.data);
    }, error => {
      console.log(error);
    });
    console.log("response", response);
    return response;
  }

  export const uploadContact = async (formData) => {
    try {
      const response = await axios.post(API_URL + 'contact', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading this message: \n', error); 
      //throw error;
    }
  }