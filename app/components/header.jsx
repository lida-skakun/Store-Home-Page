import React from 'react';
import {render} from 'react-dom';


export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsInBasket: 3,
        };
    }

    render() {
        return <div>
            <div className="header">
                <div className="leftHeader">
                    <ul>
                        <li>DELIVERY</li>
                        <li>FAQ</li>
                        <li>HELP</li>
                    </ul>
                </div>
                <div className="rightHeader">
                    <select name="currency">
                        <option>DOLLARS</option>
                        <option>EURO</option>
                        <option>UAH</option>
                    </select>
                    <select name="language">
                        <option>EN</option>
                        <option>UK</option>
                        <option>RUS</option>
                    </select>
                </div>
            </div>
            <hr/>
            <div className="navigation">
                <div className="logo">
                    <img src="images/CBcopy.png"/>
                </div>
                <nav>
                    <a href="index.html" title="home">HOME</a>
                    <a href="index.html" title="catalog" id="active">CATALOG</a>
                    <a href="index.html" title="news">NEWS</a>
                    <a href="index.html" title="sale" id="sale">SALE</a>
                    <a href="index.html" title="about">ABOUT</a>
                    <a href="index.html" title="contact">CONTACT</a>
                </nav>
                <div className="yourBag">
                    YOUR BAG
                    <div className="basket">{this.state.itemsInBasket}</div>
                    <img id="searchIcon" src="images/RoundedRectangle1.png"/>
                </div>

            </div>
            <hr />
        </div>
    }
};
