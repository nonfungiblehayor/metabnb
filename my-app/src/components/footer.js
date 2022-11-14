import React from 'react'
import Group2 from '../Group2.svg'
import twitter from '../twitter.svg'
import instragram from '../instagram.svg'
import facebook from '../facebook.svg'
import copyright from '../copyright.svg'
import FooterChild from './footerChild'

function Footer() {
    return <footer>
        <div className='footer-div'>
            <img src={Group2} alt='logo'></img>
            <div className='social-media'>
            <a href='../app.js'><img src={facebook} alt='facebook logo'></img></a>
            <a href='../app.js'><img src={instragram} alt='instagram logo'></img></a>
            <a href='../app.js'><img src={twitter} alt='twitter logo'></img></a>
            </div>
            <div className='copyright'>
            <img src={copyright} alt='copyright'></img> 
            <span>2022 Metabnb</span>
            </div>
        </div>
        <div className='footerChild'>
           <FooterChild pHead='Community' link1='NFT' link2='Token' link3='Landlords' link4='Discord'/>
           <FooterChild pHead='Places' link1='Castle' link2='Farms' link3='Beach' link4='Learn More'/>
           <FooterChild pHead='Roadmap' link1='Roadmap' link2='Creators' link3='Career' link4='Contact us'/>
        </div>
    </footer>
}

export default Footer