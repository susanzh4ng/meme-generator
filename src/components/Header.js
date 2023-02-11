import React from 'react';

function Header(){
    return(
        <header className="headerSection">
            <img src={require('../trollFace.png')} alt="Meme Generator Logo" className="headerLogo"/>
            <p className="title">Meme Generator</p>
            <p className="subheading">React Course - Project 3</p>
        </header>
    )
}

export default Header