import React, { useState, useEffect} from "react";
import './ItemDetailContainer.scss';
import { getEspecifiedProduct } from "../../services/mockAPI";
import ItemDetail from "./ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

function ItemDetailContainer(){
    const [item, setItem] = useState({});

    const {id} = useParams();

    useEffect(()=>{
        getEspecifiedProduct(parseInt(id)).then( response =>{
            setItem(response);
        }).catch(err => {
            console.log(err);
        })
    }, [id]);


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