import './NavBar.scss';
import '../../scss/style.scss';
import CartWidget from './CartWidget';
import {AiFillHome} from 'react-icons/ai';
import {GiHoodedFigure} from 'react-icons/gi';
import {FaTshirt,FaBoxes} from 'react-icons/fa';
import {ImMug} from 'react-icons/im';

//import logo from '../../../public/logo192.png'

function NavBar(){
    return (
        <nav className='flexible--row'>
            <img src="img/swShopLogo.png" alt="" className='logo' />
            <button className='button2--blue'><AiFillHome/> Inicio</button>
            <ul className="menu flexible--row">
                <li className='button--blue'><GiHoodedFigure/> Figuras de Acción</li>
                <li className='button--blue'><FaTshirt/> Ropa</li>
                <li className='button--blue'><ImMug/> Tazas</li>
                <li className='button--blue'><FaBoxes/> Otros</li>
            </ul>
            <CartWidget itemsNumber={3}/>
        </nav>
    );
}

export default NavBar;