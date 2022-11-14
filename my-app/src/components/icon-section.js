import React from 'react'
import Metamask from '../Metamask.svg'
import Opensea from '../Opensea.svg'
import MBToken from '../MBToken.svg'

function IconSection() {
    return <section className='icon-section'>
        <div>
            <img src={MBToken} alt='mbtoken'></img>
            <h2>MBToken</h2>
        </div>
        <div>
            <img src={Metamask} alt='mbtoken'></img>
            <h2>Metamask</h2>
        </div>
        <div>
            <img src={Opensea} alt='mbtoken'></img>
            <h2>Opensea</h2>
        </div>
    </section>
}

export default IconSection