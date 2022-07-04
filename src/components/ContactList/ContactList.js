import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyActionButton from '../../UI/button/MyActionButton/MyActionButton';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css';
import Spinner from '../../UI/Loader/Spinner';
import { addNewContactAction, getContactsAction } from '../../store/actions/contactListActions';


function ContactList() {

	const {listContacts: contacts, isFetching} = useSelector(state => state);
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(getContactsAction())
	}, [dispatch]);

	function newContact (){
		dispatch(addNewContactAction());
	}

	return(
		<div className="main-list">
			<Spinner />
			<div className="list-contact">
				{contacts.length | isFetching
					?	contacts.map(contact => {
						return (
							<ContactItem
								key={contact.id}
								contact={contact}
							/>
						)})
					: <h3 className="list-no-contact">Контактов нет!</h3>
				}
			</div>
			<div className="list-button">
				<MyActionButton
					type="button"
					className="action-button"
					onClick={newContact}
				>New</MyActionButton>
			</div>
		</div>
	);
}


export default ContactList;