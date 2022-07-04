import React, { useState,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyActionButton from '../../UI/button/MyActionButton/MyActionButton';
import InputList from '../InputList/InputList';
import { getInputField } from '../../utils/contactlistUtils';
import './ContactForm.css';
import { createContactAction, deleteContactAction, updateContactAction } from '../../store/actions/contactListActions';

function ContactForm() {

	const {contactForEdit} = useSelector( state => state);
	const dispatch = useDispatch();
	const [contact, setContact] = useState(contactForEdit);
	const inputField = useMemo(() => getInputField(contactForEdit), [contactForEdit]);

	function onInputChange(event){
		const newContact = {
			...contact,
			[event.target.name]: event.target.value
		}
		setContact(newContact);
	}

	function saveContact (e) {
		e.preventDefault();
		!contact.id ?	createNewContact() : updContact();
	}

	function updContact(){
		dispatch(updateContactAction(contact));
	}

	function createNewContact () {
		contact.id = Date.now();
		dispatch(createContactAction(contact))
		setContact(contactForEdit)
	}

	function onContactDelete(){
		dispatch(deleteContactAction(contact.id))
	}

	function onClearField(event){
		const sibling = event.target.parentNode.firstChild;
		const newContact = {
			...contact,
			[sibling.name]:''
		};
		setContact(newContact);
	}

	return (
		<form className="main-form">
			<InputList
				className="form-input"
				inputsField={inputField}
				contact = {contact}
				onClearField = {onClearField}
				onChange={onInputChange}
			/>
			<div className="form-button">
				<MyActionButton
					className="action-button"
					type="onSubmit"
					onClick = {saveContact}
				>Save</MyActionButton>
				{contact.id
					? <MyActionButton
							className="action-button"
							type="button"
							onClick = {onContactDelete}
						>Delete</MyActionButton>
					: null
				}
			</div>
		</form>
		)
}

export default ContactForm;