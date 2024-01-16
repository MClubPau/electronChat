import React from "react";
import { Provider } from "react-redux";

import HomeView from './views/Home';
import ChatView from "./views/Chat";
import SettingsView from "./views/Settings";
import RegisterView from "./views/Register";
import LoginView from "./views/Login";
import Navbar from './components/Navbar';

import configureStore from "./store";

import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const store = configureStore();

export default function App() {
    return (
      <>
        <Provider store={store}>
          <Router>
          <div className='content-wrapper'>
            <Navbar />
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/chat/:id" element={<ChatView />}/>
                <Route path="/settings" element={<SettingsView />}/>
                <Route path="/login" element={<LoginView />}/>
                <Route path="/register" element={<RegisterView />}/>
              </Routes>
            </div>
          </Router>
        </Provider>
      </>
    )
}