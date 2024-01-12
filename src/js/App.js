import React from "react";
import HomeView from './views/Home';
import Navbar from './components/Navbar';

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
    return (
      <>
        <Router>
        <div className='content-wrapper'>
          <Navbar />
            <Routes>
              <Route path="/settings" element={ <h1>I am Settings View</h1> }/>
              <Route path="/login" element={ <h1>I am Login View</h1> }/>
              <Route path="/register" element={ <h1>I am Register View</h1> }/>
              <Route path="/" element={ <HomeView/> } />
            </Routes>
          </div>
        </Router>
      </>
    )
}