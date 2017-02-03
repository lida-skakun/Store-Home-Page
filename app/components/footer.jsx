import React from 'react';
import {render} from 'react-dom';


const Footer = () => {
    return (
        <div>
            <div className="subscribe">
                <p>SUBSCRIBE</p>
                <h2>Stay updated on news</h2>
                <div className="email">
                    <p>YOUR EMAIL ADDRESS</p>
                    <img src="images/Rectangle3copy12.png" />
                </div>
            </div>
            <footer>
                <div className="logo">
                    <img src="images/CBcopy.png" />
                </div>
                <nav>
                    <a href="index.html" title="Home">HOME</a>
                    <a href="index.html" title="catalog">CATALOG</a>
                    <a href="index.html" title="news">NEWS</a>
                    <a href="index.html" title="sale">SALE</a>
                    <a href="index.html" title="about">ABOUT</a>
                    <a href="index.html" title="contact">CONTACT</a>
                </nav>
                <div className="rights">
                    <img src="images/20102016Allrightsres.png" />
                </div>
            </footer>
        </div>
    );
};


export default Footer;