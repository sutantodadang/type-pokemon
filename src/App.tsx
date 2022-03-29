import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import DetailPokemon from './pages/DetailPokemon';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const isLogged = useSelector((state: RootStateOrAny) => state.auth?.isLogged);

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<Outlet />}>
          <Route path="home" element={<Home />} />
          <Route path="home/:poke" element={<DetailPokemon />} />
        </Route>

        <Route
          path="*"
          element={<Navigate to={isLogged ? 'home' : 'login'} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
