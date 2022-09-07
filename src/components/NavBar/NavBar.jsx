import './NavBar.scss';
import '../../scss/style.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faCartShopping, faShirt, faMugSaucer, faChild, faCirclePlus} from '@fortawesome/free-solid-svg-icons';

//import logo from '../../../public/logo192.png'

function NavBar(){
    return (
        <nav className='flexible--row'>
            <img src="img/swShopLogo.png" alt="" />
            <button className='button2--blue'><FontAwesomeIcon icon={faHouse}/> Inicio</button>
            <ul className="menu flexible--row">
                <li className='button--blue'><FontAwesomeIcon icon={faChild}/> Figuras de Acción</li>
                <li className='button--blue'><FontAwesomeIcon icon={faShirt}/> Ropa</li>
                <li className='button--blue'><FontAwesomeIcon icon={faMugSaucer}/> Tazas</li>
                <li className='button--blue'><FontAwesomeIcon icon={faCirclePlus}/> Otros</li>
            </ul>
            <button className='button3--purple cart'><FontAwesomeIcon icon={faCartShopping}/></button>
        </nav>
    );
}

export default NavBar;