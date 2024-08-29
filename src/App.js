import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './input.css'
import Login from './pages/public/login';
import Profile from './pages/public/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
