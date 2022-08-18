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
import UseContextProvider, { userContext } from './Components/hooks/UseContextProvider';
import PrivateRoute from './Components/hooks/PrivateRoute';
import useFirebase from './Components/hooks/useFirebase';
import PrivateRouteExtra from './Components/hooks/PrivateRouteExtra';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import RegSuccess from './Components/RegSuccess/RegSuccess';

// import '../src/Components/hooks/useContextProvider'


// export const UserContext = createContext('user');
function App() {

  // useFirebase()
  // const [doctors, setDoctors] = useState([]);

  // useEffect(() => {
  //   fetch('./doctors.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setDoctors(data);

  //     });
  // }, []);


  // console.log(doctors);


  // console.log('this is from app', userContext)


  return (
    <UseContextProvider>
      <BrowserRouter>
        <Header></Header>



        <div className="Routes-div">
          <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}>
            </Route>
            <Route path="/doctor/reg" element={<RegSuccess></RegSuccess>}></Route>
            
            {/* <Route path="/doctor" element={<Doctors></Doctors>}> </Route> */}
            {/* <Route path="/doctor/:doctorId" element={<Doctors></Doctors>}     ></Route> */}



            {/* <Route path="/services" element={<Services></Services>}></Route> */}
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>

            <Route
              path="/services"
              element={<PrivateRouteExtra>
                <Services></Services>
              </PrivateRouteExtra>}
            ></Route>
            <Route
              path="/doctor"
              element={<PrivateRouteExtra>
                <Doctors></Doctors>
              </PrivateRouteExtra>}
            ></Route>
            <Route
              path="/doctor/:doctorId"
              element={<PrivateRouteExtra>
                <Doctors></Doctors>
              </PrivateRouteExtra>}
            ></Route>


            <Route path="*" element={<NotFound></NotFound>}></Route>


          </Routes>

        </div>

        <Footer></Footer>
      </BrowserRouter>

    </UseContextProvider>

  );
}

export default App;
