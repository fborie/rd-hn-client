import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div className="header">
            <h1 className="title">{props.title}</h1 >
            <p className="description">{props.description}</p>
        </div>
    );
}

export default Header;

