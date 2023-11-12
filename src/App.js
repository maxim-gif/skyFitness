import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <AppRoutes />
        <header className="App-header">
        </header>
     </div>
      
    </BrowserRouter>
  );
}

export default App;
