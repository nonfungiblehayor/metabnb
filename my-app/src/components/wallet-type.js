import React from 'react'

function WalletType(props) {
    return  <div className='wallet-type-div'>
                <div>
                <img src={props.img} alt='metamask wallet'></img>
                <p>{props.text}</p>
                </div>
                <img src={props.arrow} alt='arrow-right' className='arrow'></img>
            </div>
}

export default WalletType