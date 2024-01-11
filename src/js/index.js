import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';

/* --------------------------------------------------------------------------------
ReactDOM.render is no longer supported in React 18. Use createRoot instead.
Until you switch to the new API, your app will behave as if it’s running React 17.
Learn more: https://reactjs.org/link/switch-to-createroot
-------------------------------------------------------------------------------- */
// ReactDOM.render(<h1>I am React App!</h1>, document.getElementById('electronChat'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('electronChat');
const root = createRoot(container);
root.render(<App />);