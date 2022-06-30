import {
	initialDataObjectUnit,
	GET_CONTACTS,
	DEL_CONTACT,
	CREATE_CONTACT,
	SELECT_CONTACT,
	UPDATE_CONTACT,
	ADD_NEW_CONTACT,
	LOADING_ON,
	LOADING_OFF
} from '../../model/constants'

const initialState = {
	listContacts: [],
	contactForEdit: initialDataObjectUnit,
	isLoading: false
}


export default function contactListReducer(state = initialState, {type, payload}) {
	switch (type) {
		case GET_CONTACTS:
			return {
				...state,
				listContacts: [...payload],
				contactForEdit: initialDataObjectUnit,
			}
		case DEL_CONTACT:
			return {
				...state,
				listContacts:[...state.listContacts.filter(contact =>
					contact.id !== payload)],
				contactForEdit: initialDataObjectUnit
		}
		case CREATE_CONTACT:
			return {
				...state,
				listContacts:[...state.listContacts, payload],
				contactForEdit: initialDataObjectUnit
		}
		case SELECT_CONTACT:
			return {
				...state,
				contactForEdit: payload
		}
		case UPDATE_CONTACT:
			return {
				...state,
				listContacts: state.listContacts.map((contact) =>
				contact.id === payload.id ? payload : contact),
				contactForEdit: initialDataObjectUnit
		}
		case ADD_NEW_CONTACT:
			return {
				...state,
				contactForEdit: initialDataObjectUnit
		}
		case LOADING_ON:
			return {
				...state,
				isLoading: true
		}
		case LOADING_OFF:
			return {
				...state,
				isLoading: false
		}
		default: return state
	}
}