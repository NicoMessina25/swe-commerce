import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss';
import '../../../scss/style.scss'
import { Link } from "react-router-dom";

function ItemDetail(props){
    const {title, price, img, detail, stock} = props;

    const [itemCountState, setItemCountState] = useState(true);

    function onAddToCart(count){
        setItemCountState(false);
    }

    return (
        <div className="itemDetail flexible--row">
            <div className="imgContainer flexible--row">
                <img src={img} alt="" />
            </div>
            <div className="info flexible--column">
                <h2 className="title">{title}</h2>
                <div className="detail">
                    <p>{detail}</p>
                </div>
                <div className="price">
                    <p>$ {price}</p>
                </div>
                {itemCountState? <ItemCount onAddToCart={onAddToCart} initial={1} stock={stock}/>:<Link to='/cart' className={"button2--green"}>Terminar Compra</Link>}
                
            </div>            
        </div>
    );
}

export default ItemDetail;