import { Dispatch } from 'redux'
import client from '../../api'

import { GET_GAMES, GET_GAMES_FAILURE, GET_GAMES_SUCCESS } from './types'

export const setGameType = (gameType: string) => async (dispatch: Dispatch) => {
  dispatch({ type: GET_GAMES })
  try {
    const { data } = await client.games.setGameType(gameType)
    dispatch({ type: GET_GAMES_SUCCESS, games: data })
  } catch (err) {
    dispatch({ type: GET_GAMES_FAILURE, error: err.message })
  }
}
