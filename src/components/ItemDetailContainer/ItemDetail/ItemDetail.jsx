import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss';
import '../../../scss/style.scss'

function ItemDetail(props){
    const {title, price, img, detail, stock} = props;

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
                <ItemCount initial={1} stock={stock}/>
            </div>            
        </div>
    );
}

export default ItemDetail;