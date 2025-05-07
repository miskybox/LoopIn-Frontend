import React from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Home from './pages/home/Home'; 
import AllEvents from './pages/allevents/AllEvents';
import CreatedEvent from './pages/createeventdetails/CreateEvent.jsx';
import Profile from './pages/profile/Profile';
import LogIn from './pages/login/LogIn';
import MyEvents from './pages/myevents/MyEvents';
import MyTickets from './pages/mytickets/MyTickets';
import SubscribeEvent from './pages/subscribeeventdetails/SubscribeEvent.jsx';
import UpdateEvent from './pages/updateevent/UpdateEvent.jsx';
import AboutAndContact from './pages/aboutandcontact/AboutAndContact.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    < div className="appContainer">
    <Header/>
    <main className="mainContent"> 
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/allevents" element={<AllEvents/>} />
        <Route path="/createevent" element={<CreatedEvent/>} /> 
        <Route path="/profile" element={<Profile/>} />
        <Route path="login" element={<LogIn />}/>
        <Route path="myevents" element={<MyEvents/>} />
        <Route path="mytickets" element={<MyTickets/>} />
        <Route path="subscribeevent" element={<SubscribeEvent/>} />
        <Route path="/updateevent" element={<UpdateEvent/>} />
        <Route path="/aboutandcontact" element={<AboutAndContact />} />
        </Routes>     
    </main>
    <Footer/>
    </div>
  );
}

export default App;

