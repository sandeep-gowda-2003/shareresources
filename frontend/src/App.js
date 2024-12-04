import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout, Home } from './components';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
