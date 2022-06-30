import {
	GET_CONTACTS,
	DEL_CONTACT,
	CREATE_CONTACT,
	SELECT_CONTACT,
	UPDATE_CONTACT,
	ADD_NEW_CONTACT,
	LOADING_ON,
	LOADING_OFF
} from '../../model/constants';

export const getContacts = (payload) => {
	return {
		type: GET_CONTACTS,
		payload
	}
}
export const delContact = (payload) => {
	return {
		type: DEL_CONTACT,
		payload
	}
}
export const createContact = (payload) => {
	return {
		type: CREATE_CONTACT,
		payload
	}
}
export const selectContact = (payload) => {
	return {
		type: SELECT_CONTACT,
		payload
	}
}
export const updateContact = (payload) => {
	return {
		type: UPDATE_CONTACT,
		payload
	}
}
export const addNewContact = () => {
	return {
		type: ADD_NEW_CONTACT,
	}
}
export const loadingOn = () => {
	return {
		type: LOADING_ON,
	}
}
export const loadingOff = () => {
	return {
		type: LOADING_OFF,
	}
}