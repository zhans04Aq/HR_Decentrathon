import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'


// pages

import Home from './pages/Home'
import Profile from './pages/Profile'
import VacancyList from './pages/VacancyList'
import VacancyResponse from './pages/VacancyResponse'

// pages

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/vacancy-list' element={<VacancyList/>}/>
      <Route path='/vacancy-response' element={<VacancyResponse/>}/>
    </Routes>
  )
}

export default App
