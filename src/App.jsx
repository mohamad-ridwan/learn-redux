import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import store from './services/redux/store';
import Counter from './components/counter/Counter';
import ResultForm from './pages/resultform/ResultForm';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/result-form/:path' element={<ResultForm />} />

            <Route index path='/' element={<Counter />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
