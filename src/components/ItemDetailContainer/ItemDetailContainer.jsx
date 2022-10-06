import React, { useState, useEffect} from "react";
import './ItemDetailContainer.scss';
import '../../scss/style.scss';
import { getEspecifiedProduct } from "../../services/firestore";
import ItemDetail from "./ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import Loader from "../Loader/Loader";
//import {Pinwheel} from '@uiball/loaders';

function ItemDetailContainer(){
    const [item, setItem] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {id} = useParams();

    useEffect(()=>{
        setIsLoading(true);
        getEspecifiedProduct(id).then( response =>{
            setItem(response);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setError(err.message);
            setIsLoading(false);
        })
    }, [id]);

    
    if(isLoading){
        return (
            <Loader/>
        )
    }

    return (
        <section className="itemDetailContainer flexible--column">
            {error?<div className="error flexible--column"><h1 className="mainTitle">"Estos no son los items que buscas..."</h1><p>El item no fue encontrado</p></div>
            :
            <ItemDetail 
                id = {item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                detail={item.detail}
                stock={item.stock}/>}
        </section>
    );
}

export default ItemDetailContainer;