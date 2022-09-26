import React from "react";
import './Item.scss';
import '../../../scss/style.scss';
import Button from "../../Button/Button.jsx";
import { Link } from "react-router-dom";

function Item(props){
    const {title, price, img, id} = props;

    const urlDetalle = `/productos/${id}`;

    return (
        <div className="flexible--column itemCard">
            <h2>{title}</h2>
            <img src={img} alt="" />
            <div className="price">
                 <p>${price}</p>
            </div>
            <Link to={urlDetalle} className="itemLink">
                <Button classN={"button--green"} onClick={null}>Ver más</Button>
            </Link>
           
        </div>
    );
}

export default Item;