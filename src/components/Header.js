import React from "react";
import '../styles/header.scss';

const Header = () => 
{
    return(
    <div id="navigation-bar">
        <nav>
            <ul>
                 <li><p id="logo">LOGO</p></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <a href="#" id="menu-icon"></a>
            </ul>
        </nav>
        </div>     
    );
};
export default Header;