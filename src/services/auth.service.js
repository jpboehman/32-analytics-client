import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const register = (username, email, password) =>
	axios.post(`${API_URL}signup`, {
		username,
		email,
		password
	});

const login = (username, password) =>
	axios
		.post(`${API_URL}signin`, {
			username,
			password
		})
		.then((response) => {
			if (response.data.accessToken) {
				localStorage.setItem('user', JSON.stringify(response.data));
			}

			console.log(response.data);

			return response.data;
		});

const logout = () => {
	localStorage.removeItem('user');
};

const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

const AuthService = {
	register,
	login,
	logout,
	getCurrentUser
};

export default AuthService;
