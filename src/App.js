import { containerTitle } from './model/constants';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { connect } from 'react-redux';

function App({contactForEdit}){

	return (
		<>
			<header className="container-title">
				<h1>{containerTitle}</h1>
			</header>
			<div className="container-main"	>
				<ContactList />
				<ContactForm
					key ={contactForEdit.id}
					contactForEdit ={contactForEdit}
				/>
			</div>
		</>
	);
}

const mapStateToProps =  ({ contactForEdit}) => {
	return {
		contactForEdit
	}
}

export default connect(mapStateToProps)(App);