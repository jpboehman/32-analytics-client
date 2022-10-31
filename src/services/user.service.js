import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

const getPublicContent = () => axios.get(`${API_URL}all`);

const getPublicUser = () => axios.get(`${API_URL}user`, { headers: authHeader() });

// change to getSubsribedUserBoard
const getSubscribedUser = () => axios.get(`${API_URL}mod`, { headers: authHeader() });

const getAdminBoard = () => axios.get(`${API_URL}admin`, { headers: authHeader() });

const UserService = {
  getPublicContent,
  getPublicUser,
  getSubscribedUser,
  getAdminBoard,
};

export default UserService;
