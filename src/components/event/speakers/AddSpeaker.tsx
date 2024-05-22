import { useState } from 'react';

interface Speaker {
    fullName: string;
    username: string;
}

interface Props {
    onAddSpeaker: (speaker: Speaker) => void;
}

export const AddSpeaker = ({ onAddSpeaker }: Props) => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (fullName && username) {
            onAddSpeaker({ fullName, username });
            setFullName('');
            setUsername('');
        }
    };

    return (
        <div className="flex items-center my-4 border-b-2 border-gray-100 pb-4">
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="p-2 mb-2 border border-gray-200 rounded-md focus:outline-none focus:shadow-outline"
                    placeholder="Nombre completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="p-2 mb-2 border border-gray-200 rounded-md focus:outline-none focus:shadow-outline"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-1/5 mt-4 btn-primary text-white px-4 py-2 rounded-md focus:outline-none focus:shadow-outline"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
