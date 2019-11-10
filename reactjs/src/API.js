import axios from 'axios';

const API = axios.create({
  //baseURL: process.env.API_URL || 'https://endpoint.yourcode.app/KodingKlosty/api/' 
  baseURL: process.env.API_URL || 'localhost:5000'
});

export default API;