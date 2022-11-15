import React from 'react'
import cancel from '../cancel.png'
import image66 from '../image66.svg'
import image69 from '../image69.svg'
import Chevron from '../Chevron.svg'
import WalletType from './wallet-type'

function Modal(props) {
    return <section className='modal-section' onClick={props.hide}>
        <div className='modal-wallet-select'>
            <nav className='wallet-select-nav'>
                <p>Connect Wallet</p>
                <img src={cancel} alt='cancel img' onClick={props.hide}></img>
            </nav>
            <nav className='wallet-type-nav'>
                <span>Choose your preferred wallet:</span>
                <WalletType img={image66} arrow={Chevron} text='Metamask' className='div1'/>
                <WalletType img={image69} arrow={Chevron} text='WalletConnect'/>                                
            </nav>
        </div>
    </section> 
}

export default Modal