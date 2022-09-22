import React, { useState, useEffect } from "react";
import './ItemDetailContainer.scss';
import { getEspecifiedProduct } from "../../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";


function ItemDetailContainer(){
    const [item, setItem] = useState({});

    useEffect(()=>{
        getEspecifiedProduct(10).then( response =>{
            setItem(response);
        }).catch(err => {
            console.log(err);
        })
    }, []);


    return (
        <section className="itemDetailContainer">
            <ItemDetail 
                title={item.title}
                img={item.img}
                price={item.price}
                detail={item.detail}
                stock={item.stock}/>
        </section>
    );
}

export default ItemDetailContainer;