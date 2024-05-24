import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { authService } from '@/services';
import { UserResponse } from '@/interfaces';
import { setUser } from '@/features/user/userSlice';
import { RegisterEmployee, RegisterNotEmployee } from '@/schemas';

export const useRegister = () => {
	const dispatch = useDispatch();
	const registerNotEmployee = async (user: RegisterNotEmployee) => {
		try {
			const res: UserResponse = await authService.registerNotEmployee(
				user
			);
			if (res) {
				Cookies.set('accessToken', res.accessToken);
				dispatch(setUser(res.user));
			}
		} catch (error) {
			throw error;
		}
	};

	const registerEmployee = async (user: RegisterEmployee) => {
		try {
			const res: UserResponse = await authService.registerEmployee(user);
			if (res) {
				Cookies.set('accessToken', res.accessToken);
				dispatch(setUser(res.user));
			}
		} catch (error) {
			throw error;
		}
	};

	return { registerNotEmployee, registerEmployee };
};
