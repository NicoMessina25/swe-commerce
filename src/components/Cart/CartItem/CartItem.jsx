import Button from '../../Button/Button';
import './CartItem.scss'
import {HiTrash} from "react-icons/hi";

function CartItem({id, title, img, price, count, removeItem}){

    return(
        <div className="cartItem flexible--row">
            <div className='img flexible--row'>
                <img src={img} alt="" />
            </div>
            <div className='itemCartData flexible--column'>
                <h2>{title}</h2>
                <div className='price'>
                    <p>${price*count}</p>
                </div> 
                <div className='amount_price flexible--rowReverse'>
                    <div className='unitPrice'>
                        <p>c/u ${price}</p>
                    </div>
                     <div className='amount'>
                        <p>Cantidad: {count}</p>
                    </div>
                </div>
                <Button classN="button--red" onClick={()=>removeItem(id)}><HiTrash/>Eliminar</Button>
            </div>
            
        </div>
    )
}

export default CartItem;