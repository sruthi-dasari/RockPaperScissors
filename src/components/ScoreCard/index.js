import {
  OptionsName,
  ScoreCardContainer,
  OptionNamesContainer,
  ScoreContainer,
  ScoreHeading,
  ScoreValue,
} from './styledComponents'
import GameContext from '../../context/GameContext'

const ScoreCard = () => (
  <GameContext.Consumer>
    {value => {
      const {score} = value

      return (
        <ScoreCardContainer>
          <OptionNamesContainer>
            <OptionsName>ROCK PAPER SCISSORS</OptionsName>
          </OptionNamesContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreValue>{score}</ScoreValue>
          </ScoreContainer>
        </ScoreCardContainer>
      )
    }}
  </GameContext.Consumer>
)

export default ScoreCard
