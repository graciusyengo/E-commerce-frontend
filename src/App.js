import './App.css';
import Layout from './components/Layout/Layout';
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import Dashboard from '../src/pages/Dashboard';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* Route par défaut (Home) */}
          <Route path="dashboard" element={<Dashboard />} />  {/* Page Dashboard */}
          <Route path="contact" element={<Contact />} />  {/* Page Contact */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

