import React from 'react';
import styles from './styles/carousel.module.css';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';

const small = "100px";
const medium = "250px";
const large = "500px";

const Carousel = ({ size='medium', images }) => {

	const [ currentImg, setCurrentImage ] = useState(0);
	const [ len, setLen ] 				  = useState(images.length);

	useEffect(() => {
		setLen(images.length)
	},[images])


	if(size === "small") 	{size = small;}
	if(size === "medium") {size = medium;}
	if(size === "large") 	{size = large;}

	const nextImg = () => {
		if (currentImg < (len - 1)){
			setCurrentImage(prevState => prevState + 1);
		}
	};

	const prevImg = () => {
		if (currentImg > 0) {
			setCurrentImage(prevState => prevState - 1);
		}
	}
	return(
		<div className={styles.carousel}>
			{ currentImg > 0 ?
			<button className={`${styles.btn} ${styles.left}`} onClick={prevImg}>
				&lt;
			</button> : null}
						{images.map((img, index) => {
							return (
								<div 
								className={styles.item} 
								style= {{ 
									transform: `translate(-${currentImg * 100}%)` 
								}}	
								key={index}
								>
								<img 
								style={{
									width: `${size}`,
								}}
								src={img}
								alt={img}/
								>
								</div>
						)
						})}
			{currentImg !== len-1 ?
		    <button className={`${styles.btn} ${styles.right}`} onClick={nextImg}>
				&gt;
			</button> : null }
		</div>
	)
}

Carousel.propTypes = {
	size: PropTypes.string,
	images: PropTypes.array.isRequired,
}

export default Carousel;
