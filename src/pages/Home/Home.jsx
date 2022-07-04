import "./Home.scss";
import {NavLink} from "react-router-dom";
const Home = () => {

    return(
        <div className="home">
            <h1 className="home-title">Home</h1>
            <NavLink id="login-link" to="/Login">Login</NavLink>
        </div>
    )
}

export default Home;