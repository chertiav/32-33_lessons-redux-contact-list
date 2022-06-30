import React from 'react';
import classes from './MyRmButton.module.css';


function MyRmButton(props) {
	return (
		<button {...props} className={classes.rmButton}></button>
	)
}

export default MyRmButton;