import React from 'react';
import styles from './styles/row.module.css';
import PropTypes from 'prop-types';

const Row = ({ children }) => {
	const cols = React.Children.toArray(children);
	const rows = [];

	let currRow = [];
	let currRowSize = 0;
	cols.forEach((col, idx) => {
		const colSize = col.props.size || 1;
		console.log(colSize);

		if (currRowSize + colSize > 12) {
			rows.push(currRow);
			currRow = [];
			currRowSize = 0;
		}

		currRow.push(col);
		currRowSize += colSize;

		if (idx === cols.length - 1){
			rows.push(currRow);
		}

	});

	return (
		<>
		{rows.map((row, rowIndex) => {
			return (
				<div className={styles.row} key={rowIndex}>
					{row.map((col, colIndex) => {
						return (
							<div className={styles.col} key={colIndex}>
								{col}
							</div>
						)
					})}
				</div>
			)
		})}

		</>
	)
}


Row.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Row;
