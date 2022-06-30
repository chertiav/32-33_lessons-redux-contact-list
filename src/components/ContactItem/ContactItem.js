import React from 'react';
import MyRmButton from '../../UI/button/MyRmButton/MyRmButton';
import './ContactItem.css';

function ContactItem( {contact, onDelete, onEditContact} ) {

	function onItemDelete(){
		onDelete(contact.id);
	}

	function onContactEdit(){
		onEditContact(contact);
	}

	return (
		<div
			className="item"
			onDoubleClick={onContactEdit}
		>
			<div>
				{contact.firstName} {contact.lastName}
			</div>
			<MyRmButton
				type="button"
				className="rm-button"
				onClick = {onItemDelete}
			>&times;
			</MyRmButton>
		</div>
	)
}

export default ContactItem;