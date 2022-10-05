import {BsCart3} from 'react-icons/bs';
import './CartWidget.scss';
import '../../scss/style.scss';
import { useContext } from 'react';
import {cartCntx} from '../Context/cartContext';
import { Link } from 'react-router-dom';

function CartWidget(){
    const {getAmountItemsCart} = useContext(cartCntx);



    return (
        <Link to="/cart" className='button--purple cart'><BsCart3/><span> {getAmountItemsCart() || ""} </span></Link>
    );
}

export default CartWidget;