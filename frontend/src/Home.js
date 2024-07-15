import React, {useContext} from "react";
import UserContext from "./UserContext";
import {Link} from "react-router-dom"


const Home = () => {
    const {currentUser} = useContext(UserContext);

    return(
        <div>
            <h1> Jobly </h1>
            <h3> All the jobs in one, convenient place. </h3>
        {currentUser ? (
            <h2> Welcome Back {currentUser.firstName}! </h2>
        ):(
            <>
                <Link to="/login"> Login </Link>
                <Link to="/signup"> Signup </Link>
                
            </>
        )}
        </div>
    )
}

export default Home;

