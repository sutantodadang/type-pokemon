export const GetListPokemon = async (limit: number) => {
  try {
    const data = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    ).json();

    let res = [];

    for await (const iterator of data.results) {
      let result = await (await fetch(iterator.url)).json();
      res.push(result);
    }

    console.log(res, 'process fetch from api');

    return res;
  } catch (err) {
    console.error(err);
  }
};
