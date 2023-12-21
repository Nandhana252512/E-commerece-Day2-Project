import './App.css';
import Home from './components/Home';
import NavBarComp from './components/NavBarComp';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
function App() {
  return (

    <div className="App">
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='*' element={<Notfound />}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
