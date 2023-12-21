// App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tests from './pages/Tests';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from "./pages/Logout";
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Intro from './pages/Intro';
import Intro1 from './pages/Intro1';
import Footer from './components/Footer';
import PrivateRoute from "./wrappers/PrivateRoute";
import Roadmap1 from "./pages/Roadmap1";
import Roadmap2 from "./pages/Roadmap2";
import AfterQuiz from "./pages/AfterQuiz";
import Day1 from "./pages/Day1";
import FinishDay1 from "./pages/FinishDay1";
import FinishRoute from "./pages/FinishRoute";
import Cert from "./pages/Cert";
import Jobs from "./pages/Jobs";
import Favorite from "./pages/Favorite";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/tests" element={<Tests/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/result" element={<PrivateRoute><Result/></PrivateRoute>}/>
                <Route path="/quiz" element={<PrivateRoute><Quiz/></PrivateRoute>}/>
                <Route path="/intro" element={<PrivateRoute><Intro/></PrivateRoute>}/>
                <Route path="/intro-1" element={<PrivateRoute><Intro1/></PrivateRoute>}/>
                <Route path="/roadmap-1" element={<PrivateRoute><Roadmap1/></PrivateRoute>}/>
                <Route path="/roadmap-2" element={<PrivateRoute><Roadmap2/></PrivateRoute>}/>
                <Route path="/after-quiz" element={<PrivateRoute><AfterQuiz/></PrivateRoute>}/>
                <Route path="/day-1" element={<PrivateRoute><Day1/></PrivateRoute>}/>
                <Route path="/finish-day-1" element={<PrivateRoute><FinishDay1/></PrivateRoute>}/>
                <Route path="/finish-route" element={<PrivateRoute><FinishRoute/></PrivateRoute>}/>
                <Route path="/cert" element={<PrivateRoute><Cert/></PrivateRoute>}/>
                <Route path="/jobs" element={<PrivateRoute><Jobs/></PrivateRoute>}/>
                <Route path="/favorite" element={<PrivateRoute><Favorite/></PrivateRoute>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
