import react from "react";

const Header = ({children, ...props}) => {

    let displayName = props.isLoggedin ? props.username: "Guest";

    return(
        <div className="page-header">
            <h1>Wordpress Rest API Test</h1>
            <div className="header">
                <p>Welcome, {displayName}</p>
                {children}
            </div>
        </div>
    )
}

export default Header;