import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Dashboard from './compoments/Dashboard'
import LoginPage from './compoments/pages/LoginPage'
import Questions from './compoments/Questions'
import Profile from './compoments/Profile'
import Contact from './compoments/Contact'
import Header from './compoments/Header'
function App() {
const [isAuthenticated,setIsAuthenticated]=useState(false);


  return (
    <>
      
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/question' element={<Questions />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
