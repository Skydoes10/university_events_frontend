import { Event } from '@/interfaces';

interface SeedData {
	events: Event[];
}

export const initialData: SeedData = {
	events: [
		{
			id: '1',
			title: 'Tech Conference 2024',
			description: 'La conferencia de tecnología más grande del año',
			categories: ['Tecnoligia', 'innovación'],
			date: new Date('2024-01-01'),
			organizingFaculties: [],
			organizingPrograms: [],
			speakers: [],
			assistants: [],
			eventLocation: {
				name: 'Auditorio Argos',
				address: 'Universidad Icesi',
				city: {
					name: 'Cali',
					department: 'Valle del Cauca',
					country: 'Colombia',
				},
			},
			comments: [],
		},
		{
			id: '2',
			title: 'Tech Conference 2023',
			description: 'La conferencia de tecnología más grande del año',
			categories: ['Tecnoligia', 'innovación'],
			date: new Date('2023-01-01'),
			organizingFaculties: [],
			organizingPrograms: [],
			speakers: [],
			assistants: [],
			eventLocation: {
				name: 'Auditorio Argos',
				address: 'Universidad Icesi',
				city: {
					name: 'Cali',
					department: 'Valle del Cauca',
					country: 'Colombia',
				},
			},
			comments: [],
		},
		{
			id: '3',
			title: 'Tech Conference 2022',
			description: 'La conferencia de tecnología más grande del año',
			categories: ['Tecnoligia', 'innovación'],
			date: new Date('2022-01-01'),
			organizingFaculties: [],
			organizingPrograms: [],
			speakers: [],
			assistants: [],
			eventLocation: {
				name: 'Auditorio Argos',
				address: 'Universidad Icesi',
				city: {
					name: 'Cali',
					department: 'Valle del Cauca',
					country: 'Colombia',
				},
			},
			comments: [],
		},
		{
			id: '4',
			title: 'Tech Conference 2021',
			description: 'La conferencia de tecnología más grande del año',
			categories: ['Tecnoligia', 'innovación'],
			date: new Date('2021-01-01'),
			organizingFaculties: [],
			organizingPrograms: [],
			speakers: [],
			assistants: [],
			eventLocation: {
				name: 'Virtual',
				city: {
					name: 'Cali',
					department: 'Valle del Cauca',
					country: 'Colombia',
				},
				link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
				platform: 'Youtube',
			},
			comments: [],
		},
	],
};
