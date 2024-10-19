import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import VacancyList from './pages/VacancyList'
import VacancyResponse from './pages/VacancyResponse'
import Intro from './pages/Intro'

// components
import Layout from './components/Layout'

function App() {
  const [showIntro, setShowIntro] = useState(true); 
  const navigate = useNavigate();

  const handleProceed = () => {
    setShowIntro(false);
    navigate('/'); 
  };

  return (
    <>
      {showIntro ? (

        <Intro onProceed={handleProceed} />
      ) : (
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='vacancy-list' element={<VacancyList />} />
            <Route path='vacancy-response' element={<VacancyResponse />} />
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App;
