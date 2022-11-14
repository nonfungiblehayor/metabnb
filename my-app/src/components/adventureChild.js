import React from 'react'

function AdventureChild(props) {
    return  <div className='adventure-sectionn'>
    <img src={props.img1} alt='meta house'></img>
    <div className='adventure-section1'>
        <span>{props.spanText1}</span>
        <h6>{props.spanText2}</h6>
    </div>
    <div className='adventure-section1'>
        <span>{props.spanText3}</span>
        <h6>{props.spanText4}</h6>
    </div>
    <div className='adventure-section2'>
        <img src={props.img2} alt='rating'></img>
        <img src={props.img2} alt='rating'></img>
        <img src={props.img2} alt='rating'></img>
        <img src={props.img2} alt='rating'></img>
        <img src={props.img2} alt='rating'></img>
    </div>
</div>
}

export default AdventureChild