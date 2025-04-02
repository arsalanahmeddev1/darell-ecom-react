import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { TopBar, Header, Footer } from './components';
import { Home, About, ProductDetails, Cart } from './pages';
import { CartContextProvider } from "./context/CartContextProvider";
import { ProductContextProvider } from "./context/ProductContextProvider";
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <TopBar />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App
