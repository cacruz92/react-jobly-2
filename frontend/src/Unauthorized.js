import React from "react";
import {Link} from "react-router-dom";

const Unauthorized = () => {
    return (
        <div>
        <h1> Unauthorized ! </h1>
        <h3> Sorry, you must be logged in to view that page. </h3>
            <Link to="/login"> Login </Link>
            <Link to="/signup"> Signup </Link>
        </div>
        )
}

export default Unauthorized;