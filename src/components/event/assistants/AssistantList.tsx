import { Assistant } from '@/interfaces/assistant';
import { AssistantItem } from './Assistant';

interface Props {
    assistants: Assistant[];
}

export const AssistantList = ({ assistants }: Props) => {
    return (
        <div className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md mb-2">
            {assistants.length > 0 ? (
                assistants.map((assistant) => (
                    <AssistantItem key={assistant.username} assistant={assistant} />
                ))
            ) : (
                <p className="text-gray-700">No hay asistentes aún</p>
            )}
        </div>
    );
};
