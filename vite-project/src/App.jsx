import React,{ useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes, Route} from "react-router-dom"
import Login from './components/Login'
// import NavBar from './components/Navbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
function App() {
 

  return (
    <div >
      <Routes>
        
        
        <Route path='/'>
        
          <Route path='/signUp' element={<Signup />} />
          <Route path='/' element={<Login/>} />
        <Route path='/productForm' element={<ProductForm/>} />
        </Route>
    </Routes>
      
  
    </div>
  )
}

export default App
