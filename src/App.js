// import logo from './logo.svg';
import './App.css';
import AdminProducts from './pages/AdminProducts';
import Home from './pages/Home';
import FavouritesPage from './pages/FavouritesPage';
import ParentContext from './context/ParentContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/common/Layout';

function App() {
  return (
    <>
      <ParentContext>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favourites' element={<FavouritesPage />} />
              <Route path='/admin-products' element={<AdminProducts />} />
            </Routes>
          </Layout>
        </Router>
      </ParentContext>
    </>
  );
}

export default App;
