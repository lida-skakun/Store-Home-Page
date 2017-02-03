import React from 'react';
import {render} from 'react-dom';


export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.handlerFilterSubmit = this.handlerFilterSubmit.bind(this);
        this.state = {
            price: '',
        }
    }

    render() {
        return <div className="items" onLoad={this.handlerFilterSubmit}>
            <div className="image"><img src={this.props.itemsDataList.img}/></div>
            <div className="itemAbout">{this.props.itemsDataList.about}</div>
            <div className={this.state.price}> {this.props.itemsDataList.price}</div> 
            <div className="newPrice"> {this.props.itemsDataList.newPrice}</div>
        </div>
    }

    handlerFilterSubmit() {
        if(this.props.itemsDataList.newPrice.length > 0) {
            this.setState({price : "price"})
        }
    }
}
