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
  render() {
    const {selectedOptionImageUrl, opponentOptionImageUrl} = this.props

    // console.log(selectedOptionImageUrl, opponentOptionImageUrl)
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
          <WinOrLoseText>{}</WinOrLoseText>
          <PlayAgainButton>PLAY AGAIN</PlayAgainButton>
        </ResultsContainer>
      </ResultViewContainer>
    )
  }
}

export default ResultView
