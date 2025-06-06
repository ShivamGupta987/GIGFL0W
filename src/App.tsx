import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PeoplePage from './pages/PeoplePage';
import SalaryPage from './pages/SalaryPage';
import HiringPage from './pages/HiringPage';
import Layout from './components/Layout';
import { AuthContext } from './context/AuthContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated (this would normally check localStorage or cookies)
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // For demo purposes, we'll set a mock user
      setUser({ name: 'Nuraj Group', role: 'Admin' });
    }
  }, []);

  const login = (token: string, userData: any) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Layout />
            ) : (
              <Navigate to="/login\" replace />
            )
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="salary" element={<SalaryPage />} />
          <Route path="hiring" element={<HiringPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/\" replace />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;