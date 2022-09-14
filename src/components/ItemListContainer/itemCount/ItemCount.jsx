import React, { useState } from 'react';
import Button from '../../Button/Button.jsx';
import './ItemCount.scss';
import '../../../scss/style.scss';
import {FaPlus, FaMinus} from 'react-icons/fa';


function ItemCount({initial, stock}){
    const [count, setCount] = useState(initial);


    function clickHandlerAdd(){
        (count < stock) && setCount(count + 1);
    }

    function clickHandlerSubst(){
        (count > initial) && setCount(count - 1);
    }

    return (
        <div className='itemCountContainer flexible--column'>
            <div className='flexible--row itemCount'>
                <Button classN='button2--red itemCountButton' onClick={clickHandlerSubst}><FaMinus/></Button>
                <p>{count}</p>
                <Button classN='button2--green itemCountButton' onClick={clickHandlerAdd}><FaPlus/></Button>
            </div>
            <Button classN='button2--purple'>Agregar al Carrito</Button>
        </div>
        
    );
}

export default ItemCount;