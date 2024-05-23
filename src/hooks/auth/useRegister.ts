import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { authService } from '@/services';
import { UserResponse } from '@/interfaces';
import { setUser } from '@/features/user/userSlice';
import { RegisterUser } from '@/schemas';

export const useRegister = () => {
	const dispatch = useDispatch();
	const register = async (user: RegisterUser) => {
		try {
			const res: UserResponse = await authService.register(user);
			if (res) {
				Cookies.set('accessToken', res.accessToken);
				dispatch(setUser(res.user));
			}
		} catch (error) {
			throw error;
		}
	};

	return { register };
};
