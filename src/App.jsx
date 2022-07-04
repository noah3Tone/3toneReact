import {React, useState} from "react";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [serverMessage, setServerMessage] = useState('')

  return (
    <Router>
      <Header username={username} isLoggedIn={isLoggedIn} serverMessage={serverMessage}>
        <nav>
          <Link to="/">Profile</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </Header>

        <Routes>
          <Route exact path="/" element={<ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
          <Route path="/signup" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
