import { GET_RACES, GET_RACES_FAILURE, GET_RACES_SUCCESS } from '../actions/types'

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

export type RaceStart = {
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

export type RacesState = {
  races: GameRace[]
  error: string
}

const INITIAL_STATE: RacesState = {
  races: [],
  error: ''
}

export default (state = INITIAL_STATE, action: any) => {
  console.log(action)
  switch (action.type) {
    case GET_RACES:
      return { ...state }
    case GET_RACES_FAILURE:
      return { ...state, error: action.error }
    case GET_RACES_SUCCESS:
      return { ...state, races: action.races }
    default:
      return state
  }
}
