import React from "react";

function Header(){
    return(
        <header className="header" >
            <nav>
                <a href="#hero" className="logo">Jefferson Noe Miranda Pineda</a>
                <ul>
                   <li><a href="#about">About</a></li>
                   <li><a href="#proyects">Projects</a></li>
                   <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;