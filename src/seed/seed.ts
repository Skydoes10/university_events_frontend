import { Event } from '@/interfaces';

interface SeedData {
	events: Event[];
}

export const initialData: SeedData = {
	events: [
		{
			title: 'Tech Conference 2024',
			description: 'La conferencia de tecnología más grande del año',
			categories: ['Tecnoligia', 'innovación'],
			dateTime: '2024-05-24T15:30',
			organizing_faculties: [
				{
					id: '1',
					name: 'Facultad de Ingeniería',
				},
			],
			organizing_programs: [
				{
					id: '1',
					name: 'Ingeniería de Sistemas',
				},
				{
					id: '2',
					name: 'Ingeniería de Diseño de Medios Interactivos',
				},
			],
			speakers: [
				{
					identifier: '83728947',
					fullName: 'John Doe',
					email: 'john@gmail.com',
					city: {
						name: 'Cali',
						department: 'Valle del Cauca',
						country: 'Colombia',
					},
					relationship_type: 'Posersor',
				},
			],
			assistants: [],
			event_location: [
				{
					name: 'Auditorio Argos',
					address: 'Universidad Icesi',
					city: {
						name: 'Cali',
						department: 'Valle del Cauca',
						country: 'Colombia',
					},
				},
			],
			comments: [
				{
					text: 'Excelente evento',
					user: {
						identifier: '8323428947',
						username: 'mariadoe',
						fullName: 'Maria Doe',
						email: 'maria@gmail.com0',
						city: {
							name: 'Cali',
							department: 'Valle del Cauca',
							country: 'Colombia',
						},
						relationship_type: 'Profesor',
					},
				},
			],
		},
	],
};
