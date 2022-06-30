import React from 'react';
import classes from './MyActionButton.module.css';

function MyActionButton(props) {
	return  (
		<button {...props} className={classes.actionButton}></button>
	)
}

export default MyActionButton;