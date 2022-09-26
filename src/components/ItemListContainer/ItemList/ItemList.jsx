import React from "react";
import Item from "../Item/Item.jsx";
import './ItemList.scss';
import '../../../scss/style.scss';

function ItemList({data}){
    return (
        <div className="itemList flexible--rowWrap">
            {data.map(({id, title, price, img})=>{
                return <Item 
                    key = {id}
                    id = {id}
                    title = {title}
                    price = {price}
                    img = {img}
                />
            })}          
        </div>
    );
}

export default ItemList;