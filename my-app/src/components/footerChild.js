import React from 'react'

function FooterChild(props) {
    return <nav>
        <p>{props.pHead}</p>
        <a href='../app.js'>{props.link1}</a>
        <a href='../app.js'>{props.link2}</a>
        <a href='../app.js'>{props.link3}</a>
        <a href='../app.js'>{props.link4}</a>
    </nav>
}

export default FooterChild