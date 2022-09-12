import {BsCart3} from 'react-icons/bs';
import './CartWidget.scss';
import '../../scss/style.scss';

function CartWidget({itemsNumber}){
    return (
        <div className='button3--purple cart'><BsCart3/><span> {itemsNumber}</span></div>
    );
}

export default CartWidget;