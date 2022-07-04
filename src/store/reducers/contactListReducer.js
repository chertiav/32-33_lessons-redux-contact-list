import { initialDataObjectUnit } from '../../model/constants';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
	listContacts: [],
	contactForEdit: initialDataObjectUnit,
	isFetching: false,
	error: null,
}

export default function contactListReducer(state = initialState, {type, payload}) {
	switch (type) {
		//Get
		case ACTION_TYPES.GET_CONTACTS_SUCCESS:
			return {
				...state,
				listContacts: [...payload],
				contactForEdit: initialDataObjectUnit,
				isFetching: false,
			}
		case ACTION_TYPES.GET_CONTACTS_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTION_TYPES.GET_CONTACTS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
		//Deliting
		case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
			return {
				...state,
				listContacts:[...state.listContacts.filter(contact =>
					contact.id !== payload)],
				contactForEdit: initialDataObjectUnit,
				isFetching: false,
			}
		case ACTION_TYPES.DELETE_CONTACT_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTION_TYPES.DELETE_CONTACT_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
		//Update
		case ACTION_TYPES.PUT_CONTACT_SUCCESS:
			return {
				...state,
				listContacts: state.listContacts.map((contact) =>
					contact.id === payload.id ? payload : contact),
				contactForEdit: initialDataObjectUnit,
				isFetching: false,
		}
		case ACTION_TYPES.PUT_CONTACT_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTION_TYPES.PUT_CONTACT_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
	//Creating
		case  ACTION_TYPES.POST_CONTACT_SUCCESS:
			return {
				...state,
				listContacts:[...state.listContacts, payload],
				contactForEdit: initialDataObjectUnit,
				isFetching: false,
		}
		case ACTION_TYPES.POST_CONTACT_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case ACTION_TYPES.POST_CONTACT_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			}
		//other action
		case ACTION_TYPES.SELECT_CONTACT_ACTION:
			return {
				...state,
				contactForEdit: payload
		}
		case ACTION_TYPES.ADD_NEW_CONTACT_ACTION:
			return {
				...state,
				contactForEdit: initialDataObjectUnit
		}
		default: return state
	}
}