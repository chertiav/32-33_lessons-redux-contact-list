import React, { useState } from 'react';
import { connect } from 'react-redux';
import MyActionButton from '../../UI/button/MyActionButton/MyActionButton';
import InputList from '../InputList/InputList';
import { getInputField } from '../../utils/contactlistUtils';
import contactServiece from '../../API/ContactService';
import './ContactForm.css';
import { createContact, delContact, updateContact } from '../../store/actions/contactListActions';

function ContactForm({ contactForEdit, createContact, delContact, updateContact}) {

	const [contact, setContact] = useState(contactForEdit);

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
		contactServiece.put(`/${contact.id}`, contact)
		.then(({statusText}) => {
			console.log(statusText);
			updateContact(contact)
			})
		.catch(error => console.error(error));
	}

	function createNewContact () {
		contact.id = Date.now();
		contactServiece.post('/', contact)
			.then(({statusText}) => {
				console.log(statusText);
				createContact(contact)
				setContact(contactForEdit)
				})
			.catch(error => console.error(error));
	}

	function onContactDelete(){
		contactServiece.delete(`/${contact.id}`)
		.then(({statusText}) => console.log(statusText))
		.catch(error => console.error(error))
		delContact(contact.id);
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
				inputsField={getInputField(contactForEdit)}
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

const mapDispatchToProps = {
	createContact,
	delContact,
	updateContact
}
export default connect(null, mapDispatchToProps)(ContactForm);