import './ItemListContainer.scss';
import '../../scss/style.scss';

function ItemListContainer({greeting}){
    return (
        <section>
            <h1 className='mainTitle'>{greeting}</h1>
        </section>
    );
}

export default ItemListContainer;