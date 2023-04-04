import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard'

import PlayingView from '../PlayingView'
import ResultView from '../ResultView'

import {
  GameContainer,
  RulesButton,
  PopUpCard,
  CloseButton,
  RulesImageCard,
  RulesImageCardContainer,
} from './styledComponents'

const gameStatusConstants = {
  play: 'PLAY',
  showResult: 'SHOW_RESULT',
}

class Game extends Component {
  state = {
    gameStatus: gameStatusConstants.play,
    selectedOptionId: '',
    opponentOptionId: '',
    selectedOptionImageUrl: '',
    opponentOptionImageUrl: '',
  }

  updateGameStatus = () => {
    this.setState({gameStatus: gameStatusConstants.play})
  }

  updateSelectedAndOpponentOption = (
    selectedOptionImageUrl,
    selectedOptionId,
    randomOption,
  ) => {
    const {imageUrl, id} = randomOption
    const {opponentOptionId} = id

    const opponentOptionImageUrl = imageUrl
    // console.log(opponentOptionImageUrl)
    this.setState({
      selectedOptionImageUrl,
      opponentOptionImageUrl,
      opponentOptionId,
      selectedOptionId,
      gameStatus: gameStatusConstants.showResult,
    })
  }

  renderViewContainer = () => {
    const {choicesList} = this.props
    const {
      gameStatus,
      opponentOptionImageUrl,
      selectedOptionImageUrl,
      opponentOptionId,
      selectedOptionId,
    } = this.state

    switch (gameStatus) {
      case gameStatusConstants.play:
        return (
          <PlayingView
            choicesList={choicesList}
            updateSelectedAndOpponentOption={
              this.updateSelectedAndOpponentOption
            }
          />
        )
      case gameStatusConstants.showResult:
        return (
          <ResultView
            opponentOptionImageUrl={opponentOptionImageUrl}
            selectedOptionImageUrl={selectedOptionImageUrl}
            opponentOptionId={opponentOptionId}
            selectedOptionId={selectedOptionId}
            updateGameStatus={this.updateGameStatus}
          />
        )
      default:
        return null
    }
  }

  render() {
    return (
      <GameContainer>
        <ScoreCard />
        {this.renderViewContainer()}
        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <PopUpCard>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImageCardContainer>
                <RulesImageCard
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageCardContainer>
            </PopUpCard>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
