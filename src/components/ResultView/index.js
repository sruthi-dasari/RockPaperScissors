import {Component} from 'react'

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

class ResultView extends Component {
  state = {
    result: '',
  }

  onClickPlayAgain = () => {
    const {updateGameStatus} = this.props
    updateGameStatus()
  }

  checkResults = () => {
    const {opponentOptionId, selectedOptionId} = this.props

    if (selectedOptionId === 'PAPER' && opponentOptionId === 'ROCK') {
      this.setState({result: 'YOU WON'})
    } else if (selectedOptionId === 'SCISSORS' && opponentOptionId === 'ROCK') {
      this.setState({result: 'YOU LOSE'})
    } else if (selectedOptionId === 'ROCK' && opponentOptionId === 'PAPER') {
      this.setState({result: 'YOU LOSE'})
    } else if (
      selectedOptionId === 'SCISSORS' &&
      opponentOptionId === 'PAPER'
    ) {
      this.setState({result: 'YOU WON'})
    } else if (selectedOptionId === 'ROCK' && opponentOptionId === 'SCISSORS') {
      this.setState({result: 'YOU WON'})
    } else if (
      selectedOptionId === 'PAPER' &&
      opponentOptionId === 'SCISSORS'
    ) {
      this.setState({result: 'YOU LOSE'})
    } else if (selectedOptionId === opponentOptionId) {
      this.setState({result: 'IT IS DRAW'})
    }
  }

  render() {
    const {selectedOptionImageUrl, opponentOptionImageUrl} = this.props
    const {result} = this.state
    return (
      <ResultViewContainer>
        <OptionsContainer>
          <YouAndOpponentOptionContainer>
            <YouText>YOU</YouText>
            <SelectedOptionImage
              src={selectedOptionImageUrl}
              alt="your choice"
            />
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
          {/* {this.checkResults()} */}
          <WinOrLoseText>{result}</WinOrLoseText>
          <PlayAgainButton onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultsContainer>
      </ResultViewContainer>
    )
  }
}

export default ResultView
