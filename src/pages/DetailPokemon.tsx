import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { COLOR, Pokemon } from '../Redux/interfaces';
import LoadingComp from '../components/LoadingComp';
import { LoadingGlobal } from '../Redux/actions';

const DetailPokemon: React.FC = () => {
  let { poke } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // let color: Array<any> = [];

  const loading: boolean = useSelector(
    (state: RootStateOrAny) => state.globalState?.loading
  );

  const data: Pokemon[] = useSelector(
    (state: RootStateOrAny) => state.poke?.data
  );

  const color: COLOR = useSelector(
    (state: RootStateOrAny) => state.glob?.color
  );

  console.log(color.Vibrant);

  const detailData = useSelector((state: RootStateOrAny) => state.poke?.detail);

  useEffect(() => {
    dispatch(LoadingGlobal(false));
  }, [loading, dispatch]);

  return (
    <section className="flex flex-col w-screen h-screen items-center p-8 justify-between">
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <img
            src={data[Number(poke)].sprites?.other?.dream_world?.front_default}
            alt=""
            className="h-1/2 w-full my-5"
          />

          <h3
            className={`text-5xl font-bold text-[${
              Object.keys(color).length === 0 ? '' : color.Vibrant
            }]`}
          >
            {data[Number(poke)].name.toUpperCase()}
          </h3>

          <p
            className={`text-lg text-[${
              color.Vibrant ? '#f4ec04' : ''
            }] font-semibold`}
          >
            Description
          </p>

          <p
            className={`text-justify text-[${color ? color.DarkVibrant : ''}]`}
          >
            {detailData.flavor_text_entries}
          </p>

          <div className="flex">
            <section className="justify-center items-center flex flex-col">
              <p className={`text-[${color ? color.LightVibrant : ''}]`}>
                Type
              </p>

              <div className="flex justify-center w-36">
                {data[Number(poke)].types.map((item: any) => (
                  <p
                    key={item.slot}
                    className={`text-[${color ? color.Muted : ''}]`}
                  >
                    {item.type.name}
                  </p>
                ))}
              </div>
            </section>

            <section className="justify-center items-center flex flex-col">
              <p className={`text-[${color ? color.LightVibrant : ''}]`}>
                Abilities
              </p>

              <div className="flex justify-evenly w-full">
                {data[Number(poke)].abilities.map((item: any) => (
                  <p
                    key={item.slot}
                    className={`text-[${color ? color.LightVibrant : ''}] pl-2`}
                  >
                    {item.ability.name}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <button
            type="button"
            className="w-28 h-8 rounded-lg bg-amber-300 hover:bg-amber-600 my-5 mr-2 transition-all active:bg-amber-900"
            onClick={() => navigate('/home', { replace: true })}
          >
            Back
          </button>
        </>
      )}
    </section>
  );
};

export default DetailPokemon;
