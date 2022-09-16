import React from "react";
import './Item.scss';
import '../../../scss/style.scss';
import Button from "../../Button/Button.jsx";

function Item(props){
    const {title, price, img} = props;

    return (
        <div className="flexible--column itemCard">
            <h2>{title}</h2>
            <img src={img} alt="" />
            <div className="price">
                 <p>${price}</p>
            </div>
           <Button classN={"button--green"} onClick={null}>Ver más</Button>
        </div>
    );
}

export default Item;