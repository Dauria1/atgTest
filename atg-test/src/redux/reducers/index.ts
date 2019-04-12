import gamesReducer, { GamesState } from './games.reducer'
import racesReducer, { RacesState } from './races.reducer'

export type MainState = {
  games: GamesState
  races: RacesState
}

export default {
  games: gamesReducer,
  races: racesReducer
}
