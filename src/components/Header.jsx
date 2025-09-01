import React, { useState } from 'react'
import Logo from '../images/logo.png'
import "../css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const Header = () => {

    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        const root = document.getElementById("root")
        if (theme === "light") {
            root.style.backgroundColor = "black"
            root.style.color = "white"
            setTheme("dark")

        }
        else {
            root.style.backgroundColor = "white"
            root.style.color = "black"
            setTheme("light")

        }
    }

    return (
        <div className='header-wrapper'>
            <div className='flex-row'>
                <img src={Logo} alt="" className='logo' />
                <p className='logo-text'>ALGİT</p>
            </div>
            <div >
                <input type="text" className='header-search' placeholder='Ara' />
            </div>
            <div className='flex-row'>
                {
                    theme === "light" ?
                        <CiLight className='icon' onClick={changeTheme} />
                        :
                        <FaMoon className='moon-icon' onClick={changeTheme} />
                }
                <CiShoppingBasket className='icon' />

            </div>
        </div>
    )
}

export default Header