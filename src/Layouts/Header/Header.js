import "./Header.css"
import logo from "../../assets/Asset 16@4x.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react"
import MenuIcon from "../../assets/hamburger.svg";


const Header = ()=>{

  const navigate = useNavigate();


  const [isMenuExpand, setMenueExpand] = useState(false);


  const toggleMenu = () => {
    setMenueExpand(!isMenuExpand)
  }

  const onClickImage = () => {
    navigate("/")
  }

  const MenuItems = [
    {id: 1, label: "Home", link: "/"},
    {id: 2, label: "About", link: "/about"},
    {id: 3, label: "Menu", link: "/menu"},
    {id: 4, label: "Reservations", link: "/reservations"},
    {id: 5, label: "Order", link: "/orders"},
    {id: 6, label: "Login", link: "/login"}
  ]



    return(

      <header className="header">

            <div className="logo">
                 <img src={logo} alt="logo" height={50} onClick={onClickImage}/>



            </div>


        <nav className= {`nav ${isMenuExpand ? "open" : ""}`}>
      
          <ul className={`menu-list ${isMenuExpand ? "open" : ""}`}>

            {MenuItems.map(item => (
              <li key={item.id}>
                  <a href={item.link} className="link">
                    {item.label}
                  </a>
              </li>
            ))}
          </ul>
      </nav> 
      <div className="menu-toggle" onClick={toggleMenu}>
              <img src={MenuIcon} alt ="MenuIcon" />

      </div>
      </header>
       
    )
}
export default Header;