import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.render(
  <React.Suspense fallback={'Loading...'} >
    <App />
  </React.Suspense>,
  document.getElementById('root')
);
