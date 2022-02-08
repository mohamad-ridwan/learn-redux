import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import BlogDetail from './pages/blogdetail/BlogDetail';
import Home from './pages/home/Home';
import NotFound from './pages/notfound/NotFound';
import store from './services/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/blog-detail' element={<BlogDetail />} />

            <Route path='/' element={<Home />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
