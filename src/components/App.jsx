import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
import { Cart } from './Cart/Cart.jsx';
import { Checkout } from './Checkout/Checkout.jsx';
import { Footer } from './Footer/Footer.jsx';

//import { createProducts } from '../firebase/firebase.js';

function App() {
  //createProducts()
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      <ToastContainer />
        <Footer/>        
      </BrowserRouter>
    </div>
  );
}

export default App;
