import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Form from './pages/form/Form';
import LogIn from './pages/login/LogIn';
import MyEvents from './pages/myevents/MyEvents';
import AllEvents from './pages/allevents/AllEvents';
import CreatedEvent from './pages/createevent/CreateEvent';
import EditEvents from './pages/editevents/EditEvents';
import MyTickets from './pages/mytickets/MyTickets';
import Subscribe from './pages/subscribe/Subscribe';

function App() {
    return (
        <main>
            <div></div>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/myevents" element={<MyEvents/>}/>
                <Route path="/allevents" element={<AllEvents/>}/>
                <Route path="/create" element={<CreatedEvent/>}/>
                <Route path="/edit" element={<EditEvents/>}/>
                <Route path="/mytickets" element={<MyTickets/>}/>
                <Route path="/subscribe" element={<Subscribe/>}/>
            </Routes>
        </main>
    
    )

}

export default App;