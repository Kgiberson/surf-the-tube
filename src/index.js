import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. It will produce HTML.

const App = () => {
	return <div>Hi!</div>;
}


// Explicitly tell React to take the component and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));