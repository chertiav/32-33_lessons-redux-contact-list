import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MyActionButton from '../../UI/button/MyActionButton/MyActionButton';
import ContactItem from '../ContactItem/ContactItem';
import contactServiece from '../../API/ContactService';
import './ContactList.css';
import {getContacts, delContact, addNewContact, selectContact, loadingOff, loadingOn} from '../../store/actions/contactListActions';
import Spinner from '../../UI/Loader/Spinner';

function ContactList({contacts, getContacts, delContact, addNewContact, selectContact, loadingOff, loadingOn, isLoading}) {



	useEffect(()=> {
		loadingOn()
		contactServiece.get('')
		.then(({data}) => {
			getContacts(data)
			loadingOff()
		})
		.catch(({statusText}) => console.log(statusText))
		.finally(()=>loadingOff())
	}, [getContacts, loadingOn, loadingOff]);

	function deleteContactItem(id){
		contactServiece.delete(`/${id}`)
		.then(({statusText}) => console.log(statusText))
		.catch(error => console.error(error))
		delContact(id);
	}

	function newContact (){
		addNewContact();
	}

	return(
		<div className="main-list">
			<Spinner isLoading={isLoading}/>
			<div className="list-contact">
				{contacts.length | isLoading
					?	contacts.map(contact => {
						return (
							<ContactItem
								key={contact.id}
								contact={contact}
								onDelete={deleteContactItem}
								onEditContact={selectContact}
							/>
						)})
					: <h3 className="list-no-ontact">Контактов нет!</h3>
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

const mapStateToProps = ({listContacts, isLoading}) => {
	return {
		contacts: listContacts,
		isLoading
	}
}

const mapDispatchToProps = {
	getContacts,
	delContact,
	addNewContact,
	selectContact,
	loadingOff,
	loadingOn
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);