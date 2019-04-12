import React, { useState, MouseEvent } from 'react'

import {
  HorseName,
  DriverFirst,
  DriverLast,
  PaddingContainer,
  ExtraInfoContainer,
  Number,
  TrainerContainer
} from './styled'
import { RaceStart } from 'src/redux/reducers/races.reducer'

type OwnProps = RaceStart

type Props = OwnProps

const RacerCard = ({ number, horse, driver }: Props) => {
  const [expandedDiv, setExpandedDiv] = useState<boolean>(false)

  const handleDivClick = (event: MouseEvent) => {
    event.stopPropagation()
    setExpandedDiv(!expandedDiv)
  }

  return (
    <ExtraInfoContainer onClick={handleDivClick} key={Math.random()}>
      <PaddingContainer>
        <Number>{number}</Number>
        <HorseName>{horse.name}</HorseName>
        <DriverFirst>{driver.firstName}</DriverFirst>
        <DriverLast>{driver.lastName}</DriverLast>
      </PaddingContainer>
      {expandedDiv && (
        <TrainerContainer>
          {horse.trainer.firstName} {horse.trainer.lastName}{' '}
          {horse.pedigree.father.name}
        </TrainerContainer>
      )}
    </ExtraInfoContainer>
  )
}

export default RacerCard
