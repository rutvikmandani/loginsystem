import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MapView from './Pages/MapView/MapView';

const App = () => {
  const location = useLocation()
  let user = localStorage.getItem("currentUser")
  let auth = JSON.parse(user)
  return (
    <>
    {
      (location.pathname ==='/signup' || location.pathname ==='/')  ? null : <Header auth={auth}/>
     }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={auth ? <Home /> : <Navigate to="/" />} />
        <Route path="/about" element={auth ? <About /> : <Navigate to="/" />} />
        <Route path="/contact-us" element={auth ? <Contact /> : <Navigate to="/" />} />
        <Route path="/map-view" element={auth ? <MapView /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;