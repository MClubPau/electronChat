import React from "react";
import HomeView from './views/Home';
import SettingsView from "./views/Settings";
import RegisterView from "./views/Register";
import LoginView from "./views/Login";
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
              <Route path="/" element={ <HomeView /> } />
              <Route path="/settings" element={ <SettingsView /> }/>
              <Route path="/login" element={ <LoginView /> }/>
              <Route path="/register" element={ <RegisterView /> }/>
            </Routes>
          </div>
        </Router>
      </>
    )
}