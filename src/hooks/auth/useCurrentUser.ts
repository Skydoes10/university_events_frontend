import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { authService } from '@/services';

export const useCurrentUser = () => {
	// const [user, setUser] = useState<any>(null); //TODO Change the type to User

	useEffect(() => {
		// const token = Cookies.get('accessToken');

		// if (currentUser) {
		// 	setUser(JSON.parse(currentUser));
		// }
	}, []);


	// const refetchUser = async (userId: string) => {
	// 	const userInfo = await authService.getMe(userId);
	// 	const currentUser = Cookies.get('currentUser');

	// 	if (userInfo && currentUser) {
	// 		const newUser = {
	// 			...JSON.parse(currentUser),
	// 			username: userInfo.username,
	// 		};
	// 		Cookies.set('currentUser', JSON.stringify(newUser));
	// 		setUser(newUser);
	// 	}
	// };

	// return { user, refetchUser };
};
