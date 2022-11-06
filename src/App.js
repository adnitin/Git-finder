
import React, { useState } from 'react';

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
//react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//toast
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//components
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './Context/UserContext';
import Footer from './SimpleLyout/Footer';
import Header from './SimpleLyout/Header';


import firebaseConfig from './Configuration/FirebaseConfig';
//init firebase
firebase.initializeApp(firebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
             <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
