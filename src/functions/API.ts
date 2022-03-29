export const GetListPokemon = async (limit: number) => {
  try {
    const data = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    ).json();

    let res = [];
    // nama
    // url

    for await (const iterator of data.results) {
      let result = await (await fetch(iterator.url)).json();
      res.push(result);
    }
    // [{nama,url},{nama,url}]

    console.log(res, 'process fetch from api');

    return res;
  } catch (err) {
    console.error(err);
  }
};

export const GetDetailPokemonUrl = async (url: string) => {
  try {
    const data = await (await fetch(url)).json();

    console.log(data, 'process fetch from api');

    return data;
  } catch (err) {
    console.error(err);
  }
};
