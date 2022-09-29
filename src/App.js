
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart.jsx';
import CartContextProvider from './components/Context/cartContext.jsx';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div >
          <header>
            <NavBar/>
          </header>
          <main>
            <Routes>
              <Route path="/" element={
                <ItemListContainer greeting="Bienvenido a Star Wars Shop!"/>
              }/>
              <Route path="/categoria/:cat" element={
              
                <ItemListContainer/>}
              
              />
              <Route path="/productos/:id" element={
                <ItemDetailContainer/>
              }/>  
              <Route path='/cart' element={
                <Cart/>
              }/>         
              <Route path='*' element={<h1>Error 404</h1>}/>
            </Routes>
            
          </main>
          
        </div>
      </BrowserRouter>
    </CartContextProvider>
    
    
  );
}

export default App;
