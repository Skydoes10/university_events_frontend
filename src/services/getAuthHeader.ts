import Cookies from 'js-cookie';

export const getAuthHeader = () => {
	const accessToken = Cookies.get('accessToken');

	return {
		Authorization: `Bearer ${accessToken || ''}`,
	};
};
