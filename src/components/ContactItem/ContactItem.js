import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactAction, selectContactAction } from '../../store/actions/contactListActions';
import MyRmButton from '../../UI/button/MyRmButton/MyRmButton';
import './ContactItem.css';

function ContactItem( {contact} ) {

	const dispatch = useDispatch();

	function deleteContactItem(){
		dispatch(deleteContactAction(contact.id));
	}
	function onContactEdit(){
		dispatch(selectContactAction(contact));
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
				onClick = {deleteContactItem}
			>&times;
			</MyRmButton>
		</div>
	)
}

export default ContactItem;