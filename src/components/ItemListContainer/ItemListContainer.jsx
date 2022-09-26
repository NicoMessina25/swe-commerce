import './ItemListContainer.scss';
import '../../scss/style.scss';
import ItemList from './ItemList/ItemList.jsx';
import getProducts from '../../services/mockAPI';
import { getProductsByCat } from '../../services/mockAPI';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer({greeting}){
    const [products, setProducts] = useState([]);

    const {cat} = useParams();

    useEffect(()=>{
        if(cat === undefined){
            getProducts().then(response => {
                setProducts(response);
            });
        } else {
            getProductsByCat(cat).then(response =>{
                setProducts(response);
            });
        }
        
    },[cat]);

    return (
        <section className='itemListCont flexible--column'>
            <h1 className='mainTitle'>{cat || greeting}</h1>
            <ItemList data={products}/>
        </section>
    );
}

export default ItemListContainer;