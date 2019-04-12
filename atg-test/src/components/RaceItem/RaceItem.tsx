import React, { useState, MouseEvent } from 'react'

import { NameDateContainer, Name, Date, CardContainer, RaceDiv } from './styled'
import { RaceStart } from 'src/redux/reducers/races.reducer'
import { GameRace } from 'src/redux/reducers/games.reducer'
import RacerCard from '../RacerCard'

type OwnProps = GameRace

type Props = OwnProps

const RaceItem = ({ name, scheduledStartTime, starts, date }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    setExpanded(!expanded)
  }

  const dateAndTimeSplit = scheduledStartTime.split('T')
  const dateAndTime = `${dateAndTimeSplit[0]} ${dateAndTimeSplit[1]}`

  return (
    <RaceDiv key={Math.random()} onClick={handleClick}>
      <NameDateContainer>
        <Name>{name || 'No name given'}</Name>
        <Date>{dateAndTime}</Date>
      </NameDateContainer>
      <CardContainer>
        {expanded && (
          <>
            {starts.map(({ number, horse, driver }: RaceStart) => (
              <RacerCard number={number} horse={horse} driver={driver} />
            ))}
          </>
        )}
      </CardContainer>
    </RaceDiv>
  )
}

export default RaceItem
