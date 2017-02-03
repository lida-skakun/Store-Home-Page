import React from 'react';
import {render} from 'react-dom';
import ItemsList from './itemsList';


export default class Catalog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsData : [
                {
                    id: "1",
                    img: "images/Basecopy10.png",
                    about: "Printed swimsuit",
                    price: "$23",
                    newPrice: "",
                },
                {
                    id: "2",
                    img: "images/Basecopy10_1.png",
                    about: "Jogging bermuda shorts",
                    price: "$36",
                    newPrice: "$12",
                },
                {
                    id: "3",
                    img: "images/Basecopy10_2.png",
                    about: "Basic beach flip flops",
                    price: "$9",
                    newPrice: "",
                },
                {
                    id: "4",
                    img: "images/Basecopy10_0.png",
                    about: "Black sunglasses",
                    price: "$29",
                    newPrice: "",
                },
                {
                    id: "5",
                    img: "images/Basecopy23.png",
                    about: "Long sleeved twill shirt",
                    price: "$20",
                    newPrice: "",
                },
                {
                    id: "6",
                    img: "images/Basecopy22.png",
                    about: "Basic swimsuit",
                    price: "$36",
                    newPrice: "",
                },
                {
                    id: "7",
                    img: "images/Basecopy20.png",
                    about: "Bleached shorts",
                    price: "$12",
                    newPrice: "",
                },
                {
                    id: "8",
                    img: "images/Basecopy18.png",
                    about: "T-shirt with lower panel",
                    price: "$23",
                    newPrice: "$12",
                }
            ]
        };
    }
    render () {
        return (
        <div className="catalog">
            <h1>Catalog</h1>
            <ul>
                <li id="active">ALL</li>
                <li>T-SHIRTS</li>
                <li>SWEATERS</li>
                <li>SHORTS</li>
                <li>JACKETS</li>
                <li>ACCESSOIRES</li>
            </ul>
            <ItemsList itemsDataList={this.state.itemsData}/>
            <div id="moreItems">LOAD MORE ...</div>
        </div>
        )
    }
}