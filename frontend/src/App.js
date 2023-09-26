import React from 'react'
import Header from './compontents/Header.js';
import Home from './screens/Home.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./App.css"
import Signup from './screens/Signup.js';
import Signin from './screens/Signin.js';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Profile from './screens/Profile.js';
import PrivateScreen from "./compontents/PrivateScreen.js" 
import Update from './screens/Update.js';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route index={true} path='/' element={<Home/>}/>
        <Route  path='/signup' element={<Signup/>}/>
        <Route  path='/signin' element={<Signin/>}/>

        {/* private screen */}
        <Route path='' element={<PrivateScreen/>}>
        <Route  path='/profile' element={<Profile/>}/>
        <Route path='/update' element={<Update/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App