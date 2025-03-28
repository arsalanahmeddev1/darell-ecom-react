import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { TopBar , Header, Footer} from './components';
import {Home, About} from './pages';
function App() {
  return (
    <>
    <TopBar />
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
