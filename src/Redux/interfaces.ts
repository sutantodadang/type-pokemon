export interface User {
  email: string;
  password: string;
  name: string;
  isLogged: boolean;
}

export interface Pokemon {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: object[];
  species: object;
  sprites: any;
  stats: object[];
  types: object[];
  weight: number;
}
