import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

const middleware = []

const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
  applyMiddleware(...middleware)
)
const store = createStore(rootReducer, enhancer)

ReactDOM.render(<Provider store={store}>
	<App name='Jishnu' />
</Provider>, document.getElementById('root'));
registerServiceWorker();
