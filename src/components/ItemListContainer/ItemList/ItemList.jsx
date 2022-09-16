import React from "react";
import Item from "../Item/Item.jsx";
import './ItemList.scss';
import '../../../scss/style.scss';

function ItemList(props){
    return (
        <div className="itemList flexible--rowWrap">
            {props.data.map((i)=>{
                return <Item 
                    key = {i.id}
                    title = {i.title}
                    price = {i.price}
                    detail = {i.detail}
                    img = {i.img}
                />
            })}          
        </div>
    );
}

export default ItemList;