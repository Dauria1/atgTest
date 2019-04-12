import React, { useEffect, useState } from 'react'

import RaceItem from '../RaceItem'
import { GameInfo, GameRace } from 'src/redux/reducers/games.reducer'
import client from '../../api'
import { RacesContainer } from './styled'

type OwnProps = GameInfo
type Props = OwnProps

const GameItem = ({ id }: Props) => {
  const [races, setRaces] = useState<GameRace[]>([])

  const getRaces = async (id: string) => {
    try {
      const {
        data: { races }
      } = await client.races.getRaces(id)
      setRaces(races)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getRaces(id)
  }, [])

  return (
    <RacesContainer>
      {races &&
        races.map(({ name, scheduledStartTime, starts, date }: GameRace) => (
          <RaceItem
            date={date}
            name={name}
            scheduledStartTime={scheduledStartTime}
            starts={starts}
          />
        ))}
    </RacesContainer>
  )
}

export default GameItem
