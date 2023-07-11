import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavLayout from './layouts/NavLayout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
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
          </Routes>
        </Container>
    </div>
  );
}

export default App;
