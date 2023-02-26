import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Footer from './Components/Footer';
import Signup from './Pages/Signup';
import Contactus from './Pages/Contactus';
import Blog from './Pages/Blog';
import Dailyinsights from './Pages/Dailyinsights';
import Doctors from './Pages/Doctors';
import Ecommerce from './Pages/Ecommerce';
import Pcostracking from './Pages/Pcostracking';
import Family from './Pages/Family';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/homepage" element={<><Navbar/><Homepage/><Footer/></>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contactus" element={<><Navbar/><Contactus/><Footer/></>} />
      <Route path="/blog" element={<><Navbar/><Blog/><Footer/></>}/>
      <Route path="/dailyinsights" element={<><Navbar/><Dailyinsights/><Footer/></>}/>
      <Route path="/doctors" element={<><Navbar/><Doctors/><Footer/></>}/>
      <Route path="/ecommerce" element={<><Navbar/><Ecommerce/><Footer/></>}/>
      <Route path="/pcostracking" element={<><Navbar/><Pcostracking/><Footer/></>}/>
      <Route path="/family" element={<><Navbar/><Family/><Footer/></>}/>
    </Routes>
  );
}

export default App;