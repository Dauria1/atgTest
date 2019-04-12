import React from 'react'

import { ItemsContainer, Header } from './styled'

type OwnProps = {
  gameType: string
  children?: any
}

type Props = OwnProps

const GameItemsContainer = ({ gameType, children }: Props) => {
  return (
    <>
      <Header>{gameType}</Header>
      <ItemsContainer>{children}</ItemsContainer>
    </>
  )
}

export default GameItemsContainer
