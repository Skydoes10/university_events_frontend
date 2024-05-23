import Cookies from 'js-cookie';
import { authService } from '@/services';
import { UserResponse } from '@/interfaces';
import { useDispatch } from 'react-redux';
import { setUser } from '@/features/user/userSlice';

export const useLogin = () => {
	const dispatch = useDispatch();
	const login = async (email: string, password: string) => {
		try {
			const res: UserResponse = await authService.login(email, password);
			if (res) {
				Cookies.set('accessToken', res.accessToken);
				dispatch(setUser(res.user));
			}
		} catch (error) {
			throw error;
		}
	};

	return { login };
};
