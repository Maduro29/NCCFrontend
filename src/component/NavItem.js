import React from 'react'
import './NavItem.css'

const NavItem = (props) => {

    const { text, active, home } = props;

    return (
        <div className={`navitem ${active ? 'active' : ''} ${home ? 'home' : ''}`}>
            <span className='navitem-text'>
                <a href='#'>{text}</a>
            </span>
        </div>
    )
}

export default NavItem