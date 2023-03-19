import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/cartoonNetworkSpinner.module.css';

const CartoonNetworkSpinner = ({ interval = 3 }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [spin, setSpin] = useState(false);
	const images = [
		'https://www.giantbomb.com/a/uploads/scale_small/8/82962/1860964-eustace2.jpg',
		'https://www.giantbomb.com/a/uploads/scale_small/0/521/1192765-eddy_clipart.jpg',
		'https://www.giantbomb.com/a/uploads/scale_small/0/521/1192556-untitled.jpg',
		'https://www.giantbomb.com/a/uploads/scale_small/0/521/1192764-edd.gif',
		'https://www.giantbomb.com/a/uploads/scale_small/3/34651/3375060-dexter.png',
		'https://www.giantbomb.com/a/uploads/scale_small/1/19745/700798-tgrsp535.gif',
	];


	useEffect (() => {
		setSpin(true);
		const intervalId = setInterval(() => {
			setCurrentImage((currentImage + 1) % images.length);
			console.log(spin);
			setSpin(false);
		}, interval * 1000);

		return () => clearInterval(intervalId);
	}, [interval, currentImage, images.length]);

	return (
		<div className={styles.spinner}>
			<img 
				src={images[currentImage]} 
				alt="Charachter" 
				className={styles.charachter}
			/>
		</div>
	)
};

CartoonNetworkSpinner.propTypes = {
	interval: PropTypes.number,
}

export default CartoonNetworkSpinner;
