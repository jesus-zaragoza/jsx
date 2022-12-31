// 1) Import the React and ReactDom libraraies
import React from 'react'; //Understands what a component is and how to integrate other components
import ReactDOM from 'react-dom/client'; //Library that knows how to get a component to show up in the browser
import App from './App.js';
// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5) Show the component on the screen
root.render(<App />);