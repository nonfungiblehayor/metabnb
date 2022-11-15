import React, { useState } from 'react'
import Logo from '../Logo.svg'
import menu from '../menu.png'
import cancel from '../cancel.png'

function Header(props) {
    const [openMenu,closeMenu] = useState(false)
    
   const showMenu = function() {
       closeMenu(!openMenu)
   }
   const hideMenu = function() {
       closeMenu(!openMenu)
   }
    return <header>
        <img src={Logo} alt='metabnb'></img>
        <img src={menu} alt='menu-bar-icon' className='menu' onClick={showMenu}></img>
        <div style={{display: openMenu ? 'flex' : 'none'}}>
            <img src={cancel} alt='cancel' onClick={hideMenu}></img>
            <a href='./app.js'>Home</a>
            <a href='./app.js'>Place to stay</a>
            <a href='./app.js'>NFTs</a>
            <a href='./app.js'>Community</a>
            <button type='submit' className='menu_btn' onClick={props.show}>connect wallet</button>
        </div>
        <div className='normal-div'>
            <a href='./app.js'>Home</a>
            <a href='./app.js'>Place to stay</a>
            <a href='./app.js'>NFTs</a>
            <a href='./app.js'>Community</a>
            <button type='submit' className='menu_btn' onClick={props.show}>connect wallet</button>
        </div>
        <button type='submit' className='connect' onClick={props.show}>connect wallet</button>
    </header>
}

export default Header