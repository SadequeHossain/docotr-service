import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Doctors from './Components/Doctors/Doctors';
import { useState, createContext } from 'react';
import { useEffect } from 'react';




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

          <Route path="/home" element={<Home></Home>}>
          </Route>
          <Route path="/doctor" element={<Doctors></Doctors>}>
            <Route path="/doctor/:doctorId"></Route>


          </Route>

        </Routes>

      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
