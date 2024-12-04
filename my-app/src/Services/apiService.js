import axios from 'axios';


export const uploadData = async (formData) => {
    const API_URL = 'http://localhost:8080/api/contribute';
    try {
      const response = await axios.post('http://localhost:8080/api/contribute', formData);
      return response.data;
    } catch (error) {
      console.error('Error posting this listing: \n', error); 
      //throw error;
    }
  }

  export const getLocationPreviews = async () => {
    const response = await axios.get('http://localhost:8080/api/')
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
    const response = await axios.get(`http://localhost:8080/api/details?markerId=${id}`)
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
    const API_URL = 'http://localhost:8080/api/contact';
    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading this message: \n', error); 
      //throw error;
    }
  }