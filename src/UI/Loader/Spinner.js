import {Oval} from 'react-loader-spinner';
import classes from './Spinner.module.css';

function Spinner ({isLoading}) {
	return (
		<>
		{isLoading
			?
				<div className={classes.loaderContainer}>
					<h3 className={classes.loaderTitle}>Loading...</h3>
					<div className={classes.loader}>
						<Oval
							type="Oval"
							color="#f1f1f1"
							height={80}
							width={80}
						/>
					</div>
				</div>
		: null
		}
		</>
	)
}
export default Spinner;