import React from "react";
import Item from "../Item/Item.jsx";
import './ItemList.scss';
import '../../../scss/style.scss';

function ItemList({data}){
    return (
        <div className="itemList flexible--rowWrap">
            {data.map(({id, title, price, detail, img})=>{
                return <Item 
                    key = {id}
                    title = {title}
                    price = {price}
                    detail = {detail}
                    img = {img}
                />
            })}          
        </div>
    );
}

export default ItemList;