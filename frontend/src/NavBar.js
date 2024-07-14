import React, {useContext} from "react";
import UserContext from "./UserContext";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavItem} from "reactstrap";
import './NavBar.css'

const NavBar = ({logout}) => {
  const {currentUser} = useContext(UserContext);
    return (
        <div>
          <Navbar expand="md">
            
            <NavLink exact to="/" className="navbar-brand">
              Jobly
            </NavLink>
    
            <Nav className="ml-auto" navbar>
            {currentUser ? (
              <>
                {/* <NavItem> */}
                <NavLink to="/companies"> Companies </NavLink>
                {/* </NavItem> */}
                {/* <NavItem> */}
                <NavLink to="/jobs"> Jobs </NavLink>
                {/* </NavItem> */}
                {/* <NavItem> */}
                <NavLink to="/profile"> Profile </NavLink>
                {/* </NavItem> */}
                {/* <NavItem> */}
                <NavLink to="/" onClick={logout}> Logout </NavLink> 
                {/* </NavItem> */}
                </>
              ):(
                <>
                <NavLink to="/login"> Login </NavLink>
                <NavLink to="/signup"> Signup </NavLink>
                </>
              )}
            </Nav>
          </Navbar>
        </div>
      );
}

export default NavBar;