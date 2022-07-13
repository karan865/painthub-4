
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Wall from './components/Wall/Wall';
import Health from './components/Health/Health';
import { Services } from './components/Services/Services';
import Shop from './components/Shop/Shop';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
     <Route path='/' exact element={<Home/>} />
     <Route path='/Wall' element={<Wall/>} />
     <Route path='/health' element={<Health/>} />
     <Route path='/services' element={<Services/>} />
     <Route path='/shop' element={<Shop/>} />
     </Routes> 
   </BrowserRouter>
   </>
  );
}

export default App;

