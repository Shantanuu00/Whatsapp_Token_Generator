import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import DashboardAdmin from './components/DashboardAdmin';
import DashboardReseller from './components/DashboardReseller';
import DashboardUser from '../components/DashboardUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/reseller/dashboard" element={<DashboardReseller />} />
        <Route path="/user/dashboard" element={<DashboardUser />} />
      </Routes>
    </Router>
  );
}

export default App;
