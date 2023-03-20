import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/col.module.css';

const Col = ({ size=1, children }) => {
	return(
		<div className={styles.col} >
			{children}
		</div>
	);
}

Col.propTypes = {
	size: PropTypes.number,
	children: PropTypes.node
};

export default Col;
