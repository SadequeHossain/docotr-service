import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Doctors from './Components/Doctors/Doctors';
import { useState, createContext } from 'react';
import { useEffect } from 'react';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';




export const UserContext = createContext('user');
function App() {


  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('./doctors.json')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);

      });
  }, []);


  // console.log(doctors);





  return (
    <UserContext.Provider value={doctors} className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}>
          </Route>
          <Route path="/doctor" element={<Doctors></Doctors>}>
          </Route>
          <Route path="/doctor/:doctorId" element={<Doctors></Doctors>}     ></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
