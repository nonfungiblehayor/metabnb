import React, { useState } from 'react'
import  './subpage-style/place-to-live.css'
import Header from './header'
import AdventureChild from './adventureChild'
import Footer from './footer'
import image151 from '../Frame151.svg'
import image152 from '../Frame152.svg'
import image153 from '../Frame 153.svg'
import image154 from '../Frame154.svg'
import image155 from '../Frame155.svg'
import image157 from '../Frame157.svg'
import image158 from '../Frame159.svg'
import image1590 from '../Frame159(0).svg'
import image160 from '../Frame160.svg'
import image161 from '../Frame161.svg'
import image162 from '../Frame162.svg'
import image163 from '../Frame163.svg'
import image164 from '../Frame164.svg'
import image165 from '../Frame165.svg'
import image166 from '../Frame166.svg'
import image156 from '../Frame156.svg'
import star2 from '../Star2.svg'
import SubHead from './sub-heading'
import Modal from './modal';

function Tolive() {
    const [openMenu,closeMenu] = useState(false)
    
    const showModal = function() {
        closeMenu(!openMenu)
    }
    const hideModal = function() {
        closeMenu(!openMenu)
    }
    return <div className='place-section'>
        {openMenu ? <Modal hide={hideModal}/> : ''}
        <Header show={showModal}/>
        <SubHead />
        <section className='adventure-section'>
        <div className='adventureCh'>
        <AdventureChild img1={image151} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image152} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image153} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image154} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image155} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image156} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image157} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image158} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image1590} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image160} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image161} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image162} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image163} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image164} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image165} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image166} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
        </div>
        </section>
        <Footer />
    </div>
}
export default Tolive