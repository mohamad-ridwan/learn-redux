import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import store from './services/redux/store';
import Counter from './components/counter/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
