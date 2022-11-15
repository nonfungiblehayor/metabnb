import React, { useState } from 'react'
import Logo from '../Logo.svg'
import menu from '../menu.png'
import cancel from '../cancel.png'

function Header() {
    const [openMenu,closeMenu] = useState(false)
    
   const showMenu = function() {
       closeMenu(!openMenu)
   }
   const hideMenu = function() {
       closeMenu(!openMenu)
   }
    return <header>
        {/* {openMenu ? '' : } */}
        <img src={Logo} alt='metabnb'></img>
        <img src={menu} alt='menu-bar-icon' className='menu' onClick={showMenu}></img>
        {openMenu ? <div>
            <img src={cancel} alt='cancel' onClick={hideMenu}></img>
            <a href='./app.js'>Home</a>
            <a href='./app.js'>Place to stay</a>
            <a href='./app.js'>NFTs</a>
            <a href='./app.js'>Community</a>
            <button type='submit' className='menu_btn'>connect wallet</button>
        </div> : '' }
        <button type='submit' className='connect'>connect wallet</button>
    </header>
}

export default Header