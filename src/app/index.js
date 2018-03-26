import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import App from './containers/app';
import store from './store';

store.subscribe(() => {
    console.log("Store updated ",store.getState());
});

// store.dispatch({
//     type: "ADD", //Action needs a value or a payload
//     payload: 10 //10 I want to add
// }); //Store dispatches a new action, arg is a JS object , that is the action we sent

// store.dispatch({
//     type: "ADD", //Action needs a value or a payload
//     payload: 57 //10 I want to add
// });

// store.dispatch({
//     type: "SET_AGE", //Action needs a value or a payload
//     payload: 29 //10 I want to add
// });

render(<Provider store={store}><App /></Provider>, window.document.getElementById('app'));
