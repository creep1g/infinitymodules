import './App.css';
import Modal from './lib/components/modal';
import Form from './components/form';
import Carousel from './lib/components/carousel';
import DatePicker from './lib/components/datePicker';

import Row from './lib/components/row';
import Col from './lib/components/col';
import CartoonNetworkSpinner from './lib/components/cartoonNetworkSpinner';


import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [date, setDate] = useState();

  return (
    <div className="App">
		{date ? <h1>{date}</h1> : null}
	  	<div className="caro">
	  <Carousel images={[
		  'https://media.cleveland.com/fighting-fat-sydney/photo/fat-cowjpg-bed769400bf1cf6b_small.jpg',
		  'https://d.newsweek.com/en/full/1561066/holstein-cows.jpg'
	  ]}
	  size="large"/>
	  </div>
	  <div><DatePicker
		onDatePick={date => setDate( date )}
	  /></div>
	  <CartoonNetworkSpinner interval={3} />
	  <Row>
	  	<Col size={6} >1</Col>
	  	<Col size={6} >2</Col>
	  	<Col>8</Col>
	  	<Col>9</Col>
	  	<Col>10</Col>
	  	<Col>11</Col>
	  </Row> 
	  <Modal
		isOpen={show}
	    onClose={() => setShow(false)}
	  >
	  	<Modal.Title>Login</Modal.Title>
	  	<Modal.Body><Form setShow={() => setShow(false)} /></Modal.Body>
	  	<Modal.Footer><div>Not a user? click <a href="#">here</a></div></Modal.Footer>
	  </Modal>
		
    </div>
  );
}

export default App;
