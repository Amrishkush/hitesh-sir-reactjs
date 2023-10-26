import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//react creates its own dom basically compaeres with main dom and only changes where change is done not whole file is replaced.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
  
);
