import './ItemListContainer.scss';
import '../../scss/style.scss';
import ItemList from './ItemList/ItemList.jsx';
import getProducts from '../../services/mockAPI';
import React, {useState, useEffect} from 'react';

function ItemListContainer({greeting}){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts().then(response => {
            setProducts(response);
        });
    },[]);

    return (
        <section className='itemListCont flexible--column'>
            <h1 className='mainTitle'>{greeting}</h1>
            <ItemList data={products}/>
        </section>
    );
}

export default ItemListContainer;