import { put } from 'redux-saga/effects';
import contactServiece from '../API/ContactService';
import {
	createContactError,
	createContactRequest,
	createContactSuccess,
	deleteContactError,
	deleteContactRequest,
	deleteContactSuccess,
	getContactsError,
	getContactsRequest,
	getContactsSuccess,
	updateContactError,
	updateContactRequest,
	updateContactSuccess
} from '../store/actions/contactListActions';

export function* getContactsSaga(){
	yield put(getContactsRequest());
	try {
		const contacts =  yield contactServiece.get().then(({data}) => data);
		yield put(getContactsSuccess(contacts));
	} catch (error) {
		yield put(getContactsError(error))
	}
}
export function* deleteContactSaga({payload}){
	yield put(deleteContactRequest());
	try {
		yield contactServiece.delete(`/${payload}`);
		yield put(deleteContactSuccess(payload));
	} catch (error) {
		yield put(deleteContactError(error))
	}
}
export function* createContactSaga({payload}){
	yield put(createContactRequest());
	try {
		const newContact = yield contactServiece.post(`/`, payload).then(({data}) => data);
		yield put(createContactSuccess(newContact));
	} catch (error) {
		yield put(createContactError(error))
	}
}
export function* updateContactSaga({payload}){
	yield put(updateContactRequest());
	try {
		yield contactServiece.put(`/${payload.id}`, payload);
		yield put(updateContactSuccess(payload));
	} catch (error) {
		yield put(updateContactError(error))
	}
}