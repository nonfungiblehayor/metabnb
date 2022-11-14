import React from 'react'
import image151 from '../Frame151.svg'
import image152 from '../Frame152.svg'
import image153 from '../Frame 153.svg'
import image154 from '../Frame154.svg'
import image155 from '../Frame155.svg'
import image157 from '../Frame157.svg'
import image158 from '../Frame159.svg'
import image156 from '../Frame156.svg'
import star2 from '../Star2.svg'
import AdventureChild from './adventureChild'

function AdventureSection() {
    return <section className='adventure-section'>
        <h2>Inspiration for your next adventure</h2>
        <div className='adventureCh'>
           <AdventureChild img1={image151} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image152} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image153} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image154} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image155} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image156} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image157} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           <AdventureChild img1={image158} img2={star2} spanText3='2345km away' spanText4='available for 2weeks stay' spanText1='Desert king' spanText2='1MBT per night'/>
           
        </div>

    </section>
}

export default AdventureSection