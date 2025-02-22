import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './pages/Menu'
import Register from './pages/Register'

const App = () => {
  return (
    <div>   
      <Routes>    
      <Route path='/' element = { <Home />} />
      <Route path='/login' element = { <Login />} />
      <Route path='/register' element = { <Register />} />
      <Route path='/menu' element = { <Menu />} />
      </Routes>
    </div>
    
  )
}

export default App
