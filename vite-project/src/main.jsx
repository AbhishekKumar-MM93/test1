import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import{BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar'
import Footer from './components/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
       <NavBar/>
         <App />
        <Footer/>
  
   </BrowserRouter>
   
  </React.StrictMode>
)
