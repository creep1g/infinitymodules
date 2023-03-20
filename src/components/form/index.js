import React from 'react';
import './styles.css';


const Form = ({props}) => {
	return (
		<>
		<form className="form" onSubmit={(e) =>{
			e.preventDefault();
			props.setShow();
			
		}}>
			  <div className="input-group">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="nome@email.com.br" />
				  </div>
				  <div className="input-group">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" />
				  </div>
				  <button className="primary">Login</button>
			</form>
		</>
	)
}

export default Form;
