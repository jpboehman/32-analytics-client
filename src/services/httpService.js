import axios from 'axios';

axios.defaults.baseURL =
  process.env.REACT_APP_API_URL || 'http://localhost:8080/api/';

const user = JSON.parse(localStorage.getItem('persist:root'))?.user;
const data = user && JSON.parse(user).data.payload || null;
const TOKEN = data.accessToken || null;

export const generalRequest = axios.create({});

export const userRequest = axios.create({
  headers: { 'x-access-token': TOKEN },
});
