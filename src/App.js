import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { GlobalsStyeProject } from './index';

function App() {
  return (
    <BrowserRouter>
      <GlobalsStyeProject />
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
