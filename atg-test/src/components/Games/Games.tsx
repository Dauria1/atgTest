import React from 'react'
import { connect } from 'react-redux'

import { GamesContainer, GamesHeaderContainer, StyledInput, Header } from './styled'
import { useFormInput } from 'src/hooks/useFormInput'
import { setGameType } from '../../redux/actions/games.actions'
import { MainState } from 'src/redux/reducers'
import GameItemsContainer from '../GameItemsContainer'
import GameItem from '../GameItem'
import { GameInfo } from 'src/redux/reducers/games.reducer'
// import { Games } from 'src/redux/reducers/games.reducer'

// type Props = {}
type OwnProps = {}
type PropsFromState = ReturnType<typeof mapStateToProps>
type PropsFromDispatch = typeof mapDispatchToProps
type Props = OwnProps & PropsFromState & PropsFromDispatch

const Games = ({ games, setGameType }: Props) => {
  // const [fetchedGames, setFetchedGames] = useState<Games>({
  //   betType: '',
  //   upcoming: [],
  //   results: []
  // })

  const gameTypes = useFormInput()

  const handleClick = async () => {
    await setGameType(gameTypes.value)
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <GamesContainer>
      <GamesHeaderContainer>
        <Header>GameTypes</Header>
        <StyledInput
          onKeyPress={handleKeyPress}
          value={gameTypes.value}
          onChange={gameTypes.onChange}
        />
      </GamesHeaderContainer>
      {games.games.betType && (
        <GameItemsContainer gameType={games.games.betType}>
          {games.games.results.map(({ startTime, tracks, id }: GameInfo) => (
            <GameItem startTime={startTime} tracks={tracks} id={id} key={id} />
          ))}
          {games.games.upcoming.map(({ startTime, tracks, id }: GameInfo) => (
            <GameItem startTime={startTime} tracks={tracks} id={id} key={id} />
          ))}
        </GameItemsContainer>
      )}
    </GamesContainer>
  )
}

const mapDispatchToProps = { setGameType }

const mapStateToProps = ({ games }: MainState) => ({ games })

export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(Games)
