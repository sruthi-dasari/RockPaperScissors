import {
  ResultViewContainer,
  OptionsContainer,
  YouAndOpponentOptionContainer,
  YouText,
  SelectedOptionImage,
  OpponentText,
  OpponentOptionImage,
  ResultsContainer,
  WinOrLoseText,
  PlayAgainButton,
} from './styledComponents'

import GameContext from '../../context/GameContext'

const ResultView = () => (
  <GameContext.Consumer>
    {value => {
      console.log('In ResultView component')
      const {
        checkResults,
        result,
        updateGameStatus,
        yourOptionImageUrl,
        opponentOptionImageUrl,
        resetResult,
      } = value

      if (result === '') {
        checkResults()
      }

      const onClickPlayAgain = () => {
        console.log('In onClickPlayAgain()')
        resetResult()
        updateGameStatus()
      }

      return (
        <ResultViewContainer>
          <OptionsContainer>
            <YouAndOpponentOptionContainer>
              <YouText>YOU</YouText>
              <SelectedOptionImage src={yourOptionImageUrl} alt="your choice" />
            </YouAndOpponentOptionContainer>
            <YouAndOpponentOptionContainer>
              <OpponentText>OPPONENT</OpponentText>
              <OpponentOptionImage
                src={opponentOptionImageUrl}
                alt="opponent choice"
              />
            </YouAndOpponentOptionContainer>
          </OptionsContainer>
          <ResultsContainer>
            <WinOrLoseText>{result}</WinOrLoseText>
            <PlayAgainButton type="button" onClick={onClickPlayAgain}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultsContainer>
        </ResultViewContainer>
      )
    }}
  </GameContext.Consumer>
)

export default ResultView
