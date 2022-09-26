
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
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
            <Route path='*' element={<h1>Error 404</h1>}/>
          </Routes>
          
        </main>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
