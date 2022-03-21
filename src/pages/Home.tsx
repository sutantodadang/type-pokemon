import React, {
  ButtonHTMLAttributes,
  useEffect,
  useReducer,
  useState
} from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { GetListPokemon } from '../functions/API';
import { GetAllPokemon } from '../Redux/actions';
import { Pokemon } from '../Redux/interfaces';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState<number>(0);

  const data: Pokemon[] = useSelector(
    (state: RootStateOrAny) => state.poke?.data
  );

  const nextPoke = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (count === 19) {
      setCount(0);
    }

    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    GetListPokemon(20).then((res) => dispatch(GetAllPokemon(res)));
  }, []);
  return (
    <section className="flex items-center justify-center h-screen w-screen content-center flex-col ">
      <h2>Type Pokemon</h2>

      <img
        src={data[count].sprites?.other?.dream_world?.front_default}
        alt=""
        className="h-1/2 w-full"
      />

      <button
        type="button"
        className="w-28 h-8 rounded-lg bg-amber-300 hover:bg-amber-600"
        onClick={nextPoke}
      >
        Next Pokemon
      </button>
    </section>
  );
};

export default Home;
