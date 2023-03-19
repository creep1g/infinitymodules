import React from 'react';
import styles from './styles/datepicker.module.css';
import PropTypes from 'prop-types';
const DatePicker = ({ onDatePick, locale="is-IS" }) => {
	

	const picked = (e) => {
		e.preventDefault();
		var picked = new Date(e.target.value);
		picked = picked.toLocaleDateString(locale);
		onDatePick(picked);
	}

	
	return (
		<div className={styles.container}>
			<label htmlFor="date" className={styles.label}>Date:</label>
			<input 
				className={styles.picker}
				type="date"
				id="date"
				name="date"
				onChange={(e) => {
					e.preventDefault();
					picked(e);
					}
				}
				/>
		</div>
	)
}

DatePicker.propTypes = {
	locale: PropTypes.string,
	onDatePick: PropTypes.func.isRequired,
};

export default DatePicker;
