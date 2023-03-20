import React from 'react';
import styles from './styles/modal.module.css';
import PropTypes from 'prop-types';

var closeBtn = "X";

const Modal = ({ isOpen = false, onClose, children }) => {

	return (
		<>
		{isOpen ? 
		<div className={styles.modal}>

		<div className={styles.modalcontent}>
			<button type="close" className={styles.close} onClick={() => {
				onClose()
			}}>
				{closeBtn}
			</button>

				{children}
			</div>
		</div>
			: null}
		</>
	)
};



const Title 	= ({ children }) =>  <h1 className={styles.title}>{children}</h1>;
const Body 		= ({ children }) => <div className={styles.body}>{children}</div>;
const Footer 	= ({ children }) => <div className={styles.footer}><footer>{children}</footer></div>;

Modal.Title  = Title;
Modal.Body 	 = Body;
Modal.Footer = Footer;

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	isOpen: PropTypes.bool,
	children: PropTypes.node.isRequired,
}

Title.propTypes = {
	children: PropTypes.node.isRequired,
}

Body.propTypes = {
	children: PropTypes.node.isRequired,
}

Footer.propTypes = {
	children: PropTypes.node.isRequired,
}
export default Modal;
