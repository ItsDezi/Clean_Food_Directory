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