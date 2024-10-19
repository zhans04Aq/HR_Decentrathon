import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import axios from 'axios'

// pages
import Home from './pages/Home'
import Profile from './pages/Profile'
import VacancyList from './pages/VacancyList'
import VacancyResponse from './pages/VacancyResponse'
import Intro from './pages/Intro'

// components
import Layout from './components/Layout'
import RoleChoose from './pages/RoleChoose'

function App() {
  const [showIntro, setShowIntro] = useState(true); 
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Получаем текущий URL
    const url = new URL(window.location.href);
    
    // Извлекаем параметр user_id
    const id = url.searchParams.get('user_id');
    
    // Устанавливаем ID в состояние
    if (id) {
        setUserId(id);
    }
}, []);




  const handleProceed = () => {
    setShowIntro(false);
    navigate('role'); 
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Выполнение GET-запроса
    axios.get('https://bitech-api.vercel.app/api/data')
      .then(response => {
        setData(response.data);
        console.log(data) // Сохранение данных в состояние
        setLoading(false);      // Отключение состояния загрузки
      })
      .catch(error => {
        setError(error.message); // Обработка ошибки
        setLoading(false);
      });
  }, []);

  return (
    <>
      {showIntro ? (

        <Intro onProceed={handleProceed} />
      ) : (
        <Routes>
          <Route path='role' element={<RoleChoose/>}/>
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
