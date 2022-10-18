import { useContext } from 'react';
import { cartCntx } from '../Context/cartContext';
import { Link } from 'react-router-dom';
import './Cart.scss';
import '../../scss/style.scss';
import CartItem from './CartItem/CartItem';
import Button from '../Button/Button';

function Cart(){
    const {cart, getTotalCartPrice, removeItem, clear} = useContext(cartCntx);

    if(!cart.length){
        return (
            <div className='cartContainer noProductsInCart flexible--column'>
                <h1 className='mainTitle'>El carrito está vacío...</h1>
                <Link to="/" className="button2--green">Ir a la tienda</Link>
            </div>
        )
    }

    return(
        <section className='cartContainer flexible--column'>
            <h1 className='mainTitle'>Mi Carrito</h1>
            {cart.map(({id, title, img, price, count})=>{
                return <CartItem
                    key={id}
                    id={id}
                    title={title}
                    img={img}
                    price={price}
                    count={count}
                    removeItem={removeItem}/>
            })}
            <article className='totalContainer flexible--row'>
                <div className='totalPrice flexible--column'><span>Total: ${getTotalCartPrice()}</span></div>
                <div className='buttonsContainer flexible--column'>
                    <Link to="/checkout" className='button--green'>Finalizar Compra</Link>
                    <Button classN={"button--red"} onClick={()=>clear()}>Vaciar Carrito</Button>
                </div>
                
            </article>
            
        </section>
    )
}

export default Cart;