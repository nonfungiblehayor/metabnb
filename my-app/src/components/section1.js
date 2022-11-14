import React from 'react'
import image5 from '../image5.svg'
import image6 from '../image6.svg'
import image4 from '../image4.svg'
import image3 from '../image3.svg'

function Places() {
    return <section className='section1'>
        <div className='section1-text'>
            <h1>Rent a <span>Place away</span> from <span>Home</span> in the <span>Metaverse </span></h1>
            <p>
            we provide you access to luxury and affordable houses in the metaverse,
             get a chance to turn your imagination to reality at your comfort zone
            </p>
            <div>
                <input type='search' placeholder='search for location' />
                <button>search</button>
            </div>
        </div>
        <div className='section1-img'>
            <div>
                <img src={image4} alt='meta house'></img>
                <img src={image6} alt='meta house'></img>
            </div>
            <div>
                <img src={image3} alt='meta house'></img>
                <img src={image5} alt='meta house'></img>
            </div>
        </div>
    </section>
}

export default Places