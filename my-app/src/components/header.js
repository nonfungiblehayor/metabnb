import React, { useState } from 'react'
import Logo from '../Logo.svg'
import menu from '../menu.png'

function Header() {
    const [closeMenu,openMenu] = useState(false)

    const showMenu = function() {
        openMenu(!closeMenu)
    }
    return <header>
        <img src={Logo} alt='metabnb'></img>
        <img src={menu} alt='menu-bar-icon' className='menu' onClick={showMenu}></img>
        <div>
            <a href='./app.js'>Home</a>
            <a href='./app.js'>Place to stay</a>
            <a href='./app.js'>NFTs</a>
            <a href='./app.js'>Community</a>
            <button type='submit' className='menu_btn'>connect wallet</button>
        </div>
        <button type='submit' className='connect'>connect wallet</button>
    </header>
}

export default Header