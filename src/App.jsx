import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/privateroute/PrivateRoute.jsx';

import Home from './pages/home/Home.jsx';
import AllEvents from './pages/allevents/AllEvents.jsx';
import CreatedEvent from './pages/createeventdetails/CreateEvent.jsx';
import Profile from './pages/profile/Profile.jsx';
import LogIn from './pages/login/LogIn.jsx';
import MyEvents from './pages/myevents/MyEvents.jsx';
import MyTickets from './pages/mytickets/MyTickets.jsx';
import SubscribeEvent from './pages/subscribeeventdetails/SubscribeEvent.jsx';
import UpdateEvent from './pages/updateevent/UpdateEvent.jsx';
import AboutAndContact from './pages/aboutandcontact/AboutAndContact.jsx';

import Header from './components/Header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">
        <Routes>
          {/* — RUTAS PÚBLICAS — */}
          <Route path="/" element={<Home />} />
          <Route path="/allevents" element={<AllEvents />} />
          <Route path="/login" element={<LogIn />} />

          {/* — RUTAS PROTEGIDAS — */}
          <Route element={<PrivateRoute />}>
            <Route path="/createevent" element={<CreatedEvent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myevents" element={<MyEvents />} />
            <Route path="/mytickets" element={<MyTickets />} />
            <Route path="/subscribeevent" element={<SubscribeEvent />} />
            <Route path="/updateevent" element={<UpdateEvent />} />
            <Route path="/aboutandcontact" element={<AboutAndContact />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
