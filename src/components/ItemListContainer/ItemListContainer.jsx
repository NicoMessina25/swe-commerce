import './ItemListContainer.scss';
import '../../scss/style.scss';
import ItemCount from './itemCount/ItemCount.jsx';

function ItemListContainer({greeting}){
    return (
        <section className='itemListCont flexible--column'>
            <h1 className='mainTitle'>{greeting}</h1>
            <ItemCount initial={1} stock={6}/>
        </section>
    );
}

export default ItemListContainer;