import { apiUrl } from '@/utils/getEnv';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

export const authService = new AuthService(apiUrl);
export const eventService = new EventService(apiUrl);
