import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { authService } from '@/services';
import { UserResponse } from '@/interfaces';
import { setUser } from '@/features/user/userSlice';
import { LoginUser } from '@/schemas';

export const useLogin = () => {
	const dispatch = useDispatch();
	const login = async (user: LoginUser) => {
		try {
			const res: UserResponse = await authService.login(user);
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
