import { GET_GAMES, GET_GAMES_FAILURE, GET_GAMES_SUCCESS } from '../actions/types'

export type Games = {
  betType: string
  upcoming: GameInfo[]
  results: GameInfo[]
}

type Track = {
  id: string
  name: string
}

export type GameInfo = {
  id: string
  startTime: string
  tracks: Track[]
}

export type GameResponse = {
  id: string
  races: GameRace[]
  status: string
}

export type GameRace = {
  date: string
  name: string
  scheduledStartTime: string
  starts: RaceStart[]
}

type RaceStart = {
  number: number
  driver: {
    firstName: string
    lastName: string
  }
  horse: {
    name: string
    trainer: {
      firstName: string
      lastName: string
    }
    pedigree: {
      father: {
        name: string
      }
    }
  }
}

export type GamesState = {
  games: Games
  error: string
}

const INITIAL_STATE: GamesState = {
  games: {
    betType: '',
    upcoming: [],
    results: []
  },
  error: ''
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_GAMES:
      return { ...state }
    case GET_GAMES_FAILURE:
      return { ...state, error: action.error }
    case GET_GAMES_SUCCESS:
      return { ...state, games: action.games }
    default:
      return state
  }
}
