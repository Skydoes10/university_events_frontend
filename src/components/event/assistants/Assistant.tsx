import { Assistant } from "@/interfaces";
import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance'

interface Props {
    assistant: string;
}

export const AssistantItem = ( { assistant }: Props) => {

	useEffect(() => { 
		const fetchingData = async () => {
			console.log(`Fetching asssistant with ID: ${assistant}`);
			const response = await axiosInstance.get(`/assistants/${assistant}`);
			console.log('Event data:', response.data);
		}

		fetchingData();
        
	}, [])

    return (
        <div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<div className="ml-4">
				<p className="font-semibold text-gray-700">
					{assistant}
				</p>
			</div>
		</div>
    );

}