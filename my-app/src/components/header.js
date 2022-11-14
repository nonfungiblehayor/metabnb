import React from 'react'
import Logo from '../Logo.svg'

function Header() {
    return <header>
        <img src={Logo} alt='metabnb'></img>
        <div>
            <a href='./app.js'>Home</a>
            <a href='./app.js'>Place to stay</a>
            <a href='./app.js'>NFTs</a>
            <a href='./app.js'>Community</a>
        </div>
        <button type='submit'>connect wallet</button>
    </header>
}

export default Header