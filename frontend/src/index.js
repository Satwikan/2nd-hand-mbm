import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import 'antd/dist/antd.css';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { rootReducer } from './Reducers/Index';

//store

const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(

    <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
