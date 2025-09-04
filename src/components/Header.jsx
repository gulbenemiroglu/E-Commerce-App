import React, { useState } from 'react'
import Logo from '../images/logo.png'
import "../css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../store/basket/basketSlice';
import { clearSearch, setSearch } from '../store/search/searchSlice';






const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.basket)
    const { query } = useSelector((store) => store.search);

    const [inputValue, setInputValue] = useState(query || "")
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

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            dispatch(setSearch(inputValue)); // 
            setInputValue("");
        }
    };

    return (
        <div className='header-wrapper'>
            <div className='flex-row'>
                <img src={Logo} className='logo' onClick={() => navigate("/")} />
                <p className='logo-text' onClick={() => navigate("/")}>ALGİT</p>
            </div>
            <div >
                <input
                    type="text"
                    className='header-search'
                    placeholder='Ara'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}

                />
            </div>
            <div className='flex-row'>
                {
                    theme === "light" ?
                        <CiLight className='icon' onClick={changeTheme} />
                        :
                        <FaMoon className='moon-icon' onClick={changeTheme} />


                }
                <Badge className='MuiBadge-badge' badgeContent={products.length} color='error' anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',


                }}
                    sx={{
                        "& .MuiBadge-badge": {
                            right: -1,   // ikonun üzerine oturması için
                            top: -4,     // ikonun üstüne kaydırmak için
                            transform: "scale(1)" // sayı çok büyükse küçültmek için
                        }
                    }}

                    onClick={() => dispatch(setDrawer())}
                >
                    <CiShoppingBasket className='icon basket-icon' />
                </Badge>
            </div>

        </div>
    )
}

export default Header