// import logo from './logo.svg';
import './App.css';
import AdminProducts from './pages/AdminProducts';
import Home from './pages/Home';

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
