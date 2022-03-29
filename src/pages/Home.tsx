import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import LoadingComp from '../components/LoadingComp';
import PokemonCard from '../components/PokemonCard';
import { Pokemon } from '../Redux/interfaces';

const Home: React.FC = () => {
  // const dispatch = useDispatch();

  // const [loading, setLoading] = useState<boolean>(false);

  // const [count, setCount] = useState<number>(0);
  // const [limit, setLimit] = useState<number>(20);

  const loading: boolean = useSelector(
    (state: RootStateOrAny) => state.globalState?.loading
  );

  const data: Pokemon[] = useSelector(
    (state: RootStateOrAny) => state.poke?.data
  );

  // const nextPoke = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   if (data.length - 5 === count) {
  //     // setCount(0);
  //     setLimit((prev) => prev + 20);
  //     // dispatch(LoadingGlobal(true));
  //     GetListPokemon(limit).then((res) => dispatch(GetAllPokemon(res)));
  //     // dispatch(LoadingGlobal(false));
  //   }

  //   setCount((prev) => prev + 1);
  // };

  // const prevPoke = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   setCount((prev) => prev - 1);
  // };

  return (
    <section className="flex items-center justify-center h-screen w-screen content-center flex-col m-4">
      <h1 className="text-3xl">Type Pokemon</h1>

      {loading ? (
        <LoadingComp />
      ) : (
        <div className="grid grid-flow-row auto-rows-max grid-cols-4 w-screen h-screen">
          {data.map((item: any, idx: number) => (
            <PokemonCard
              key={item.id}
              name={item.name.toUpperCase()}
              image={item.sprites?.other?.dream_world?.front_default}
              type={item.types}
              url={item.species.url}
              id={idx}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
