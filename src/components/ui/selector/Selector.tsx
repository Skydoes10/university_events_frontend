'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Organizer } from '@/interfaces';

interface SelectorProps {
    name: string;
    onChange: (selectedItems: Organizer[]) => void;
    items: Organizer[];
}

export const Selector: React.FC<SelectorProps> = ({ name, onChange, items }) => {
    const [selectedItems, setSelectedItems] = useState<Organizer[]>([]);
    const [showOptions, setShowOptions] = useState(false);

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleSelectItem = (item: Organizer) => {
        const isSelected = selectedItems.some(selected => selected.id === item.id);
        if (isSelected) {
            setSelectedItems(prevItems => prevItems.filter(selected => selected.id !== item.id));
        } else {
            setSelectedItems(prevItems => [...prevItems, item]);
        }
    };

    useEffect(() => {
        onChange(selectedItems);
    }, [selectedItems]);

    return (
        <div className="flex flex-col mb-2 gap-1">
            <label>{name}</label>
            <div className="inline-block relative w-full">
                <div onClick={handleToggleOptions} className="w-full">
                    <div className="p-2 border border-gray-200 flex rounded-md bg-white">
                        <div className="flex flex-auto flex-wrap">
                            {selectedItems.map(item => (
                                <div key={item.id} className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 border border-blue-300">
                                    <div className="text-xs font-normal leading-none max-w-full flex-initial">
                                        {item.name}
                                    </div>
                                    <div className="flex flex-auto flex-row-reverse">
                                        <div onClick={() => handleSelectItem(item)}>
                                            <svg className="fill-current h-6 w-6" role="button" viewBox="0 0 20 20">
                                                <path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15C14.817,13.62,14.817,14.38,14.348,14.849z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {selectedItems.length === 0 && (
                                <div className="flex-1">
                                    <input
                                        placeholder="Selecciona al menos una opción"
                                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                                        value=""
                                        readOnly
                                    />
                                </div>
                            )}
                        </div>
                        <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                            <button type="button" onClick={handleToggleOptions} className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                {showOptions ? (
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                        <path d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z" />
                                    </svg>
                                ) : (
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                        <path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {showOptions && (
                    <div className="w-full px-4">
                        <div className="absolute shadow top-100 bg-white z-40 w-full left-0 rounded max-h-select overflow-y-auto">
                            <div className="flex flex-col w-full">
                                {items.map(item => (
                                    <div key={item.id} className="cursor-pointer w-full border-gray-200 rounded-t border-b hover:bg-blue-100" onClick={() => handleSelectItem(item)}>
                                        <div className={`flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative ${selectedItems.some(selected => selected.id === item.id) ? 'border-teal-600' : ''}`}>
                                            <div className="w-full items-center flex">
                                                <div className="mx-2 leading-6">{item.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
