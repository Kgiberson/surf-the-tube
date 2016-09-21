import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDippAQekyHERUbs1S58jL4IjV7tUxP1E8';

// Create a new component. It will produce HTML.

const App = () => {
	return <div>Hi!</div>;
}


// Explicitly tell React to take the component and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));