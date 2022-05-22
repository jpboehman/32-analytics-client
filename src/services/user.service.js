import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

const getPublicContent = () => axios.get(`${API_URL}all`);

const getUserBoard = () => axios.get(`${API_URL}user`, { headers: authHeader() });

const getModeratorBoard = () => axios.get(`${API_URL}mod`, { headers: authHeader() });

const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;
