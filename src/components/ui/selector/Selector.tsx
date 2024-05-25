'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Organizer } from '@/interfaces';

interface Props {
	required: boolean;
	optionsToSelect: Organizer[];
	handleSelected: (selected: Organizer[]) => void;
}

interface Option {
	value: string;
	text: string;
	selected: boolean;
}

export const Selector = ({
	required,
	optionsToSelect,
	handleSelected,
}: Props) => {
	const [options, setOptions] = useState<Option[]>([]);
	const [selected, setSelected] = useState<number[]>([]);
	const [show, setShow] = useState(false);
	const selectRef = useRef<HTMLSelectElement>(null);

	useEffect(() => {
		const optionsArray: Option[] = [];
		if (selectRef.current) {
			const selectOptions = selectRef.current.options;
			for (let i = 0; i < selectOptions.length; i++) {
				optionsArray.push({
					value: selectOptions[i].value,
					text: selectOptions[i].innerText,
					selected:
						selectOptions[i].getAttribute('selected') !== null,
				});
			}
		}
		setOptions(optionsArray);
	}, []);

	const handleSelect = (index: number) => {
		setOptions((prevOptions) => {
			const newOptions = [...prevOptions];
			newOptions[index].selected = !newOptions[index].selected;
			return newOptions;
		});

		setSelected((prevSelected) => {
			if (prevSelected.includes(index)) {
				return prevSelected.filter((i) => i !== index);
			} else {
				return [...prevSelected, index];
			}
		});
	};

	const handleRemove = (index: number) => {
		setOptions((prevOptions) => {
			const newOptions = [...prevOptions];
			newOptions[index].selected = false;
			return newOptions;
		});
		setSelected((prevSelected) => prevSelected.filter((i) => i !== index));
	};

	const selectedValues = () => selected.map((index) => options[index].value);

	useEffect(() => {
		handleSelected(selected.map((index) => optionsToSelect[index]));
	}, [selected]);

	return (
		// <div className="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
		<div className="">
			<select
				ref={selectRef}
				style={{ display: 'none' }}
				required={required}
			>
				{optionsToSelect?.map((option) => (
					<option key={option.id} value={option.id}>
						{option.name}
					</option>
				))}
			</select>
			<div>
				<input
					name="values"
					type="hidden"
					value={selectedValues().join(',')}
				/>
				<div className="inline-block relative w-full">
					<div className="flex flex-col items-center relative">
						<div onClick={() => setShow(!show)} className="w-full">
							{/* <div className="my-2 p-1 flex border border-gray-200 bg-white rounded"> */}
							<div className="p-2 border border-gray-200 flex rounded-md bg-white">
								<div className="flex flex-auto flex-wrap">
									{selected.map((index) => (
										<div
											key={options[index].value}
											className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 border border-blue-300"
										>
											<div className="text-xs font-normal leading-none max-w-full flex-initial">
												{options[index].text}
											</div>
											<div className="flex flex-auto flex-row-reverse">
												<div
													onClick={() =>
														handleRemove(index)
													}
												>
													<svg
														className="fill-current h-6 w-6"
														role="button"
														viewBox="0 0 20 20"
													>
														<path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697s1.228-0.469,1.697,0L10,8.183l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0s0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15C14.817,13.62,14.817,14.38,14.348,14.849z" />
													</svg>
												</div>
											</div>
										</div>
									))}
									{selected.length === 0 && (
										<div className="flex-1">
											<input
												placeholder="Selecciona al menos una opción"
												className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
												value={selectedValues().join(
													', '
												)}
												readOnly
											/>
										</div>
									)}
								</div>
								<div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
									<button
										type="button"
										onClick={() => setShow(!show)}
										className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
									>
										{show ? (
											<svg
												className="fill-current h-4 w-4"
												viewBox="0 0 20 20"
											>
												<path d="M2.582,13.891c-0.272,0.268-0.709,0.268-0.979,0s-0.271-0.701,0-0.969l7.908-7.83c0.27-0.268,0.707-0.268,0.979,0l7.908,7.83c0.27,0.268,0.27,0.701,0,0.969c-0.271,0.268-0.709,0.268-0.978,0L10,6.75L2.582,13.891z" />
											</svg>
										) : (
											<svg
												version="1.1"
												className="fill-current h-4 w-4"
												viewBox="0 0 20 20"
											>
												<path d="M17.418,6.109c0.272-0.268,0.709-0.268,0.979,0s0.271,0.701,0,0.969l-7.908,7.83c-0.27,0.268-0.707,0.268-0.979,0l-7.908-7.83c-0.27-0.268-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.979,0L10,13.25L17.418,6.109z" />
											</svg>
										)}
									</button>
								</div>
							</div>
						</div>
						{show && (
							<div className="w-full px-4">
								<div className="absolute shadow top-100 bg-white z-40 w-full left-0 rounded max-h-select overflow-y-auto">
									<div className="flex flex-col w-full">
										{options.map((option, index) => (
											<div key={option.value}>
												<div
													className="cursor-pointer w-full border-gray-200 rounded-t border-b hover:bg-blue-100"
													onClick={() =>
														handleSelect(index)
													}
												>
													<div
														className={`flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative ${
															option.selected
																? 'border-teal-600'
																: ''
														}`}
													>
														<div className="w-full items-center flex">
															<div className="mx-2 leading-6">
																{option.text}
															</div>
														</div>
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
			</div>
		</div>
	);
};
