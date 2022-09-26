import './NavBar.scss';
import '../../scss/style.scss';
import CartWidget from './CartWidget';
import {AiFillHome} from 'react-icons/ai';
import {GiHoodedFigure} from 'react-icons/gi';
import {FaTshirt,FaBoxes} from 'react-icons/fa';
import {ImMug} from 'react-icons/im';
import {Link} from 'react-router-dom';

//import logo from '../../../public/logo192.png'

function NavBar(){
    return (
        <nav className='flexible--row'>
            <Link to='/'><img src="/img/swShopLogo.png" alt="" className='logo' /></Link>
            <Link className='button2--blue' to='/'><AiFillHome/> Inicio</Link>
            <ul className="menu flexible--row">
                <li className='button--blue'><GiHoodedFigure/> <Link to="/categoria/FigurasAccion" className='categoryLink'>Figuras de Acción</Link> </li>
                <li className='button--blue'><FaTshirt/> <Link to="/categoria/Ropa" className='categoryLink'>Ropa</Link></li>
                <li className='button--blue'><ImMug/> <Link to="/categoria/Tazas" className='categoryLink'>Tazas</Link></li>
                <li className='button--blue'><FaBoxes/> <Link to="/categoria/Otros" className='categoryLink'>Otros</Link></li>
            </ul>
            <CartWidget itemsNumber={3}/>
        </nav>
    );
}

export default NavBar;