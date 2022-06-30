export function getInputField (initialObjectField) {
	const listInputField = Object.keys(initialObjectField).filter(inputsField =>
		inputsField !== 'id');
	if (!listInputField) return;
	return (
		listInputField.map(inputField => {
			return {
				name: inputField,
				placeholder: inputField.split(/(?=[A-Z])/).map(item =>
					item[0].toUpperCase() + item.slice(1)).join(" "),
				type: "text",
			}
		})
	);
};