import axios, { AxiosResponse } from 'axios'
import { GameInfo } from 'src/redux/reducers/games.reducer'
import { GameResponse } from 'src/redux/reducers/races.reducer'

const client = axios.create({
  baseURL: 'https://www.atg.se/services/racinginfo/v1/api'
})

export default {
  games: {
    setGameType: (gameType: string): Promise<AxiosResponse<GameInfo>> =>
      client.get(`/products/${gameType}`)
  },
  races: {
    getRaces: (gameId: string): Promise<AxiosResponse<GameResponse>> =>
      client.get(`/games/${gameId}`)
  }
}
