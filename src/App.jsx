// src/App.jsx
import React from 'react';
import { Routes, Route, Form } from 'react-router-dom';
import Home from './pages/home/Home'; 
import AllEvents from './pages/allevents/AllEvents';
import CreatedEvent from './pages/createevent/CreateEvent';
import Profile from './pages/profile/Profile';
import LogIn from './pages/login/LogIn';
import MyEvents from './pages/myevents/MyEvents';
import MyTickets from './pages/mytickets/MyTickets';
import SubscribeEvent from './pages/subscribeevent/SubscribeEvent.jsx';
import UpdateEvent from './pages/updateevent /UpdateEvent .jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/allevents" element={<AllEvents />} />
        <Route path="/createevent" element={<CreatedEvent />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="login" element={<LogIn />} />
        <Route path="myevents" element={<MyEvents />} />
        <Route path="mytickets" element={<MyTickets />} />
        <Route path="subscribeevent" element={<SubscribeEvent />} />
        <Route path="updateevent" element={<UpdateEvent />} />
        </Routes>     
    </div>
  );
}

export default App;

