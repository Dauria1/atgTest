import { Dispatch } from 'redux'
import client from '../../api'

import { GET_RACES, GET_RACES_FAILURE, GET_RACES_SUCCESS } from './types'

export const getRaces = (gameId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_RACES })
    const { data } = await client.races.getRaces(gameId)
    dispatch({ type: GET_RACES_SUCCESS, races: data.races })
  } catch (err) {
    dispatch({ type: GET_RACES_FAILURE, error: err.message })
  }
}
