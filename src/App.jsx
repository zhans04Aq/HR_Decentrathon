import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

// pages
import Home from './pages/Home'
import ProfileJobSeeker from './pages/ProfileJobSeeker'
import ProfileRecruiter from './pages/ProfileRecuiter'
import VacancyList from './pages/VacancyList'
import VacancyResponse from './pages/VacancyResponse'
import Intro from './pages/Intro'

// components
import Layout from './components/Layout'
import RoleChoose from './pages/RoleChoose'
import JobSearch from './pages/JobSearch'

function App() {
  const [showIntro, setShowIntro] = useState(true); 
  const navigate = useNavigate();


  const handleProceed = () => {
    setShowIntro(false);
    navigate('role'); 
  };

  return (
    <>
      {showIntro ? (

        <Intro onProceed={handleProceed} />
      ) : (
        <Routes>
          <Route path='role' element={<RoleChoose/>}/>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<ProfileJobSeeker />} />
            <Route path='recruiter' element={<ProfileRecruiter />} />
            <Route path='vacancy-list' element={<VacancyList />} />
            <Route path='vacancy-response' element={<VacancyResponse />} />
            <Route path='search-job' element={<JobSearch/>}/>
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App;
