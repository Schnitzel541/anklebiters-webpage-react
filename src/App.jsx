import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import Over from './Pages/Over/Over';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/over" element={<Over />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
