import React from 'react';
import InputItem from '../InputItem/InputItem';
import './InputList.css';

function InputList({ inputsField,
	onChange,
	contact,
	onClearField
} ) {
	return (
		<div className="form-input">
			{inputsField.map(input => {
				return (
					<InputItem
						key={input.name}
						input={input}
						value={contact[input.name]}
						onChange={onChange}
						onClearField={onClearField}
					/>
				)}
			)}
		</div>
	)
}

export default InputList;