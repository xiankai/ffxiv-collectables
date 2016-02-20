import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { error } from './reducers/error';
import { gatherer } from './reducers/gatherer';
import { equipment } from './reducers/equipment';
import App from './components/App';

const reducer = combineReducers({
	gatherer,
	equipment
});

const store = compose(
	applyMiddleware(error),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);