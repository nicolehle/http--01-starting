import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
  //Edit config if nessasery
  return request
}, error => {
  console.log(error);
})

axios.interceptors.response.use(response => {
  //Edit config if nessasery
  return response
}, error => {
  console.log(error);
})


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
