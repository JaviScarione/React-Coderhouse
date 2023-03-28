import './App.css';
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Productos'}/>
    </div>
  );
}

export default App;
