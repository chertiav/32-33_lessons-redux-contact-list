import ACTION_TYPES from './actionTypes';

//Getting
export const getContactsAction = () => {
	return {
		type: ACTION_TYPES.GET_CONTACTS_ACTION,
	}
}
export const getContactsRequest = () => {
	return {
		type: ACTION_TYPES.GET_CONTACTS_REQUEST,
	}
}
export const getContactsSuccess = (payload) => {
	return {
		type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
		payload
	}
}
export const getContactsError = (payload) => {
	return {
		type: ACTION_TYPES.GET_CONTACTS_ERROR,
		payload
	}
}
//Creating
export const createContactAction = (payload) => {
	return {
		type: ACTION_TYPES.POST_CONTACT_ACTION,
		payload
	}
}
export const createContactRequest = () => {
	return {
		type: ACTION_TYPES.POST_CONTACT_REQUEST,
	}
}
export const createContactSuccess = (payload) => {
	return {
		type: ACTION_TYPES.POST_CONTACT_SUCCESS,
		payload
	}
}
export const createContactError = (payload) => {
	return {
		type: ACTION_TYPES.POST_CONTACT_ERROR,
		payload
	}
}
//Deliting
export const deleteContactAction = (payload) => {
	return {
		type: ACTION_TYPES.DELETE_CONTACT_ACTION,
		payload
	}
}
export const deleteContactRequest = () => {
	return {
		type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
	}
}
export const deleteContactSuccess = (payload) => {
	return {
		type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
		payload
	}
}
export const deleteContactError = (payload) => {
	return {
		type: ACTION_TYPES.DELETE_CONTACT_ERROR,
		payload
	}
}
//Updating
export const updateContactAction = (payload) => {
	return {
		type: ACTION_TYPES.PUT_CONTACT_ACTION,
		payload
	}
}
export const updateContactRequest = () => {
	return {
		type: ACTION_TYPES.PUT_CONTACT_REQUEST,
	}
}
export const updateContactSuccess = (payload) => {
	return {
		type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
		payload
	}
}
export const updateContactError = (payload) => {
	return {
		type: ACTION_TYPES.PUT_CONTACT_ERROR,
		payload
	}
}
//other action
export const selectContactAction= (payload) => {
	return {
		type: ACTION_TYPES.SELECT_CONTACT_ACTION,
		payload
	}
}
export const addNewContactAction = () => {
	return {
		type: ACTION_TYPES.ADD_NEW_CONTACT_ACTION,
	}
}