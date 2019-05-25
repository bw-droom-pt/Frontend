import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import './index.css';
import App from './App';

// const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
