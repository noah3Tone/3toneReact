import {React, useState} from "react";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom"; //BrowserRouter
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";
import Success from "./pages/Success/Success";
import Cart from "./pages/Cart/Cart";

function App() {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [serverMessage, setServerMessage] = useState('')
  let url = window.location.href;
  let page = url.split('/')[3];
  console.log(page);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header username={username} isLoggedIn={isLoggedIn} serverMessage={serverMessage} page={page}>
        <nav>
          <Link to="/my-account">My Account</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/success" element={<Success />} />
        <Route exact path="/3tonereact" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        <Route exact path="/Home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        <Route path="/Cart" element={<Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        <Route exact path="/my-account" element={<ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        <Route exact path="/my-account" element={<ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
        <Route path="/sign-up" element={<SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} serverMessage={serverMessage} setServerMessage={setServerMessage}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
