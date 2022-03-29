import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setColor } from '../Redux/reducer/global_reducer';
import Vibrant from 'node-vibrant';

import { getDetailPokemonApi } from '../Redux/reducer/pokemon_reducer';

interface Props {
  name: string;
  image: string;
  type: Array<{}>;
  url: string;
  id: number;
}

const PokemonCard: React.FC<Props> = ({ name, image, type, id, url }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // await GetDetailPokemonUrl(url).then((res) => {
    //   dispatch(LoadingGlobal(true));
    //   dispatch(GetDetailPokemon(res));
    //   // dispatch(SetColor({ color, palette }));
    // });

    Vibrant.from(image)
      .getPalette()
      .then(async (palette: any) => {
        let Vibrant = palette.Vibrant.getHex();
        let Muted = palette.Muted.getHex();
        let DarkVibrant = palette.DarkVibrant.getHex();
        let DarkMuted = palette.DarkMuted.getHex();
        let LightVibrant = palette.LightVibrant.getHex();
        dispatch(
          setColor({ Vibrant, Muted, DarkVibrant, DarkMuted, LightVibrant })
        );
      });

    dispatch(getDetailPokemonApi(url));

    navigate(`/home/${id}`);
  };

  return (
    <form onClick={handleClick}>
      <div className="container w-2/3 h-28 border border-emerald-400 flex shadow-lg p-2 m-2 justify-evenly align-middle hover:bg-slate-100 hover:w-3/4 transition- cursor-pointer">
        <img src={image} alt="" className="w-16 h-16" />

        <div className="flex flex-col justify-center items-center">
          <h3 className=" font-bold text-red-500">{name}</h3>
          {type.map((item: any) => (
            <p key={item.slot} className="text-indigo-600">
              {item.type.name}
            </p>
          ))}
        </div>
      </div>
    </form>
  );
};

export default PokemonCard;
