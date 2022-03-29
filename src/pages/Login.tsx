import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginAction } from '../Redux/actions';
import { User } from '../Redux/interfaces';
import { getAllPokemonApi } from '../Redux/reducer/pokemon_reducer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const state: User = useSelector((state: RootStateOrAny) => state.auth);
  console.log(state, 'state from reducer');

  const dispatch = useDispatch();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);

    setMessage('');

    if (!email || !password) {
      setMessage('email or password empty');
      setError(true);
    }

    if (email !== state.email) {
      setMessage('email not found');
      setError(true);
    }

    if (password !== state.password) {
      setMessage('password not match');
      setError(true);
    }

    // console.log(state);

    if (email === state.email && password === state.password) {
      dispatch(LoginAction(true));

      navigate('/home', { replace: true });
    }
  };

  useEffect(() => {
    dispatch(getAllPokemonApi(40));
  }, [dispatch]);

  useEffect(() => {
    setMessage('');
  }, [message]);

  return (
    <div className="flex items-center justify-center h-screen w-screen content-center">
      <div>
        <h3 className="text-2xl font-bold my-5 ">Welcome, Please Login</h3>

        <form onSubmit={login}>
          <input
            type="email"
            className="w-80 h-8 rounded block  focus:outline-none focus:shadow-xl transition-all my-5 border-2 border-cyan-300 p-2"
            placeholder="Write Your Email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
          />

          <input
            type="password"
            className="w-80 h-8 rounded block border-2 focus:outline-none focus:shadow-xl transition-all p-2  border-cyan-300"
            placeholder="Write Your Password"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 w-20 h-8 rounded hover:bg-blue-800 transition-all text-slate-50 my-5 "
          >
            Login
          </button>
        </form>

        <p className={`${error ? '' : 'invisible'} text-xl text-pink-400`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Login;
