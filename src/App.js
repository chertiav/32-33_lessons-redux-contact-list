import { containerTitle } from './model/constants';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';

function App(){

	const {contactForEdit, error} = useSelector( state => state);

	return (
		<>
			{error ? <span className="message-error">{error.message}</span>	: null}
			<header className="container-title">
				<h1>{containerTitle}</h1>
			</header>
			<div className="container-main"	>
				<ContactList />
				<ContactForm
					key ={contactForEdit.id}
					contactForEdit = {contactForEdit}
				/>
			</div>
		</>
	);
}

export default App;