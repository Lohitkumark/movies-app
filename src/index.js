import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css' 

const store = configureStore()
console.log(store);

store.subscribe(()=>{
  console.log('updatedState', store.getState());
}) 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
