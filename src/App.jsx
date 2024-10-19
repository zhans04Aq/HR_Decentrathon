import { useState,  } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'


// pages
import Home from './pages/Home'
import ProfileJobSeeker from './pages/ProfileJobSeeker'
import ProfileRecruiter from './pages/ProfileRecuiter'
import VacancyResponse from './pages/VacancyResponse'
import Intro from './pages/Intro'

// components
import Layout from './components/Layout'
import RoleChoose from './pages/RoleChoose'
import JobSearch from './pages/JobSearch'
import Registration from './pages/Registration'

function App() {
  const [showIntro, setShowIntro] = useState(true); 
  const navigate = useNavigate();


  const handleProceed = () => {
    setShowIntro(false);
    navigate('register'); 
  };

  return (
    <>
      {showIntro ? (

        <Intro onProceed={handleProceed} />
      ) : (
        <Routes>
          <Route path='role' element={<RoleChoose/>}/>
          <Route path='register' element={<Registration/>}/>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='recruiter' element={<ProfileJobSeeker />} />
            <Route path='profile' element={<ProfileRecruiter />} />
            <Route path='vacancy-response' element={<VacancyResponse />} />
            <Route path='search-job' element={<JobSearch/>}/>
          </Route>
        </Routes>
      )}
    </>
  )
}

export default App;
