import { apiUrl } from '@/utils/getEnv';
import { AuthService } from './auth.service';

export const authService = new AuthService(apiUrl);
