import './ItemListContainer.scss';
import '../../scss/style.scss';
import ItemList from './ItemList/ItemList.jsx';
import getProducts, { getProductsByCat } from '../../services/firestore';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemListContainer({greeting}){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const {cat} = useParams();

    useEffect(()=>{
        setIsLoading(true)
        if(cat === undefined){
            getProducts().then(response => {
                setProducts(response);
                setIsLoading(false)
            })
        } else {
            getProductsByCat(cat).then(response =>{
                setProducts(response);
                setIsLoading(false)
            })
        }
        
    },[cat]);

    if(isLoading){
        return(
            <Loader/>
        )
    }

    return (
        <section className='itemListCont flexible--column'>
            <h1 className='mainTitle'>{cat || greeting}</h1>
            <ItemList data={products}/>
        </section>
    );
}

export default ItemListContainer;