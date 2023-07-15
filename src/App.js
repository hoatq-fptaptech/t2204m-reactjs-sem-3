import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavLayout from './layouts/NavLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { useReducer, useState } from 'react';
import STATE from './context/initState';
import { UserProvider } from './context/userContext';
import reducer from './context/reducer';

function App() {
  const [state,dispatch] = useReducer(reducer,STATE);
  return (
    <UserProvider value={{state,dispatch}}>
      <div className="App">
          <Container>
            <NavLayout/>
          </Container>
          <Container>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/category' element={<CategoryPage/>}/>
                <Route path='/product' element={<ProductPage/>}/>
                <Route path='/product/:id' element={<ProductDetailPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
          </Container>
      </div>
    </UserProvider>
  );
}

export default App;
