
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        {/* <ItemListContainer greeting="Bienvenido a Star Wars Shop!"/> */}
        <ItemDetailContainer/>
      </main>
      
    </div>
  );
}

export default App;
