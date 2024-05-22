import { Assistant } from "@/interfaces";

interface Props {
    assistant: Assistant;
}

export const AssistantItem = ( { assistant }: Props) => {

    return (
        <div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
			<div className="ml-4">
				<p className="font-semibold text-gray-700">
					{assistant.fullName}
				</p>
			</div>
		</div>
    );

}