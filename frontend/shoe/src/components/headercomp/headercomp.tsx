import React from "react";
import './headercomp.css';

const Headercomp = () => {
    return(
    <>
        <div className="headerparent maincontainer">
            <div className="headerchild childcontainer">
                <a href="#">
                    <img src="public/assets/images/Logo/Logo_white.png" alt="Shoe Logo" className="shoeLogo"/>
                </a>
                <a href="#" className="paraclass headeratag">Home</a>
                <a href="#" className="paraclass headeratag">About</a>
                <a href="#" className="paraclass headeratag">Shoes</a>
                <a href="#" className="paraclass headeratag">Contact Us</a>
                <a href="#" className="paraclass headeratag">FAQ</a>
                <div className="registerdiv">
                    <div className="togglebuttonswitch">
                        <div className="toggleround">
                            <i className="fa-solid fa-cloud-sun"></i>
                        </div>
                    </div>
                    <a href="#" className="register paraclass">Register</a>
                    <a href="#" className="loginbutton">Login</a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Headercomp