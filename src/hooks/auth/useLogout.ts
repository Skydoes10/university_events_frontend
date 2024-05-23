import { clearUser } from '@/features/user/userSlice';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

export const useLogout = () => {
	const dispatch = useDispatch();

	const logout = () => {
		Cookies.remove('accessToken');
		dispatch(clearUser());
	};

	return { logout };
};
