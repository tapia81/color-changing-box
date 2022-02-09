import { useState } from 'react';
import './App.css';

function App() {
	const [ color, setColor ] = useState('purple');

	const changeColor = (colorText) => {
		if (colorText.target.value == '') {
			setColor(color);
		} else {
			setColor(colorText.target.value);
			console.log(colorText.target.value);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div style={{ backgroundColor: color }} className="square" />

				<input className="input-field" placeholder="Enter Color" onChange={(color) => changeColor(color)} />
			</div>
		</div>
	);
}

export default App;
