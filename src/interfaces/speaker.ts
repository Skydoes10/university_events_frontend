import { User } from './user';

export interface Speaker extends User {}

export interface SpeakerEmployee {
	apellidos: string;
	cod_facultad: number;
	codigo_sede: number;
	email: string;
	identificacion: string;
	lugar_nacimiento: number;
	nombres: string;
	tipo_contratacion: string;
	tipo_empleado: string;
	city: string;
}
