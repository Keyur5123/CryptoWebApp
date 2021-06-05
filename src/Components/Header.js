import React from 'react'
import "./Header.css"
import { Button } from "@material-ui/core";
import { Image } from 'react-bootstrap';
import logo from "./logo/logo.svg"
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className="header">
        <div className="header__left">
          {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rj7956t-LLJWGagXFAmsYB8CYIV4cTNsHQ&usqp=CAU"  height="50px" roundedCircle></Image> */}
          <img src={logo} height="50px" roundedcircle></img>
          <h3>Crypto<sub>Web</sub></h3>
        </div>
        <div className="header__center">
          <Link className="text-decoration-none" to="/market"><h4 className="text-decoration-none" id="market">Market</h4></Link>
          <h4 id="about_us">About Us</h4>
          <h4 id="contect_us">Contect Us</h4>
          <h4 id="help">Help</h4>
        </div>
        <div className="header__right">
          <div id="header__right__btn">
            <Link to="/login">
              <Button id="btn1" variant="contained" color="primary">
                SIGN IN
              </Button>
            </Link>
            <Link to="/Register">
              <Button id="btn2" variant="outlined" color="primary">
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Header;
