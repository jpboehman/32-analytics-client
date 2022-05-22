export default function authHeader() {
	// TODO: Store outside of local storage -
	const user = JSON.parse(localStorage.getItem('user'));

	if (user && user.accessToken) {
		return { 'x-access-token': user.accessToken }; // for Node.js Express back-end
	}
	return {};
}
