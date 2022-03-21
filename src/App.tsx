import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { User } from './Redux/interfaces';

function App() {
  const isLogged = useSelector((state: User) => state.isLogged);

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Outlet />}>
          <Route path="home" element={<Home />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={isLogged ? '/home' : 'login'} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
