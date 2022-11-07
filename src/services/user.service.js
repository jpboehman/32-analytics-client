import { generalRequest, userRequest } from './httpService';

const getPublicContent = () => generalRequest.get('/test/all');

const getPublicUser = () => userRequest.get('/test/user');

const getSubscribedUser = () => userRequest.get('/test/mod');

const getAdminBoard = () => userRequest.get('/test/admin');

const UserService = {
  getPublicContent,
  getPublicUser,
  getSubscribedUser,
  getAdminBoard,
};

export default UserService;
