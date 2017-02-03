import React from 'react';
import {render} from 'react-dom';
import Item from './item'


export default class ItemsList extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        var itemsNodes = this.props.itemsDataList.map(function(item) {
            return (
                <Item itemsDataList={item} key={item.id}>
                </Item>
            );
        });
        return  <div className="itemsList">
            {itemsNodes}
        </div>;
    }
}