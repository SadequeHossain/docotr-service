import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        <Routes>

          <Route path="/home" element={<Home></Home>}>
               
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
