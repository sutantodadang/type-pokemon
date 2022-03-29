export interface User {
  email: string;
  password: string;
  name: string;
  isLogged: boolean;
}

export interface COLOR {
  Vibrant: string;
  Muted: string;
  DarkVibrant: string;
  DarkMuted: string;
  LightVibrant: string;
}

export interface GLOBAL {
  loading: boolean;
  color: COLOR;
}

export interface Pokemon {
  abilities: Array<{}>;
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
  types: Array<{}>;
  weight: number;
}
