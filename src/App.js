import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './input.css';
import Dashboard from './pages/admin/dashboard';
import ShippingComps from './pages/admin/shipping';
import ShippingCompsForm from './pages/admin/shipping/form';
import Login from './pages/public/login';
import Profile from './pages/public/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shipping-comps" element={<ShippingComps />} />
        <Route path="/shipping-comps/form" element={<ShippingCompsForm />} />
        <Route path="/shipping-comps/form/:id" element={<ShippingCompsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
