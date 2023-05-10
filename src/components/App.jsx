import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Cart } from './Cart/Cart.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
