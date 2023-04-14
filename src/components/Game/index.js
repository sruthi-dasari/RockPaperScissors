import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ScoreCard from '../ScoreCard'

import PlayingView from '../PlayingView'
import ResultView from '../ResultView'

import GameContext from '../../context/GameContext'

import {
  GameContainer,
  RulesButton,
  PopUpCard,
  CloseButton,
  RulesImageCard,
  RulesImageCardContainer,
  //   CloseIcon,
} from './styledComponents'

// const gameStatusConstants = {
//   play: 'PLAY',
//   showResult: 'SHOW_RESULT',
// }

class Game extends Component {
  state = {
    showResult: false,
    selectedOptionImageUrl: '',
    opponentOptionImageUrl: '',
    score: 0,
    result: '',
    yourOptionId: '',
    opponentOptionId: '',
  }

  setYourOption = id => {
    this.setState({yourOptionId: id})
  }

  setOpponentOption = id => {
    this.setState({opponentOptionId: id})
  }

  checkResults = () => {
    const {yourOptionId, opponentOptionId} = this.state
    if (yourOptionId === 'PAPER' && opponentOptionId === 'ROCK') {
      this.setState({result: 'YOU WON'}, this.updateScore)
    } else if (yourOptionId === 'SCISSORS' && opponentOptionId === 'ROCK') {
      this.setState({result: 'YOU LOSE'}, this.updateScore)
    } else if (yourOptionId === 'ROCK' && opponentOptionId === 'PAPER') {
      this.setState({result: 'YOU LOSE'}, this.updateScore)
    } else if (yourOptionId === 'SCISSORS' && opponentOptionId === 'PAPER') {
      this.setState({result: 'YOU WON'}, this.updateScore)
    } else if (yourOptionId === 'ROCK' && opponentOptionId === 'SCISSORS') {
      this.setState({result: 'YOU WON'}, this.updateScore)
    } else if (yourOptionId === 'PAPER' && opponentOptionId === 'SCISSORS') {
      this.setState({result: 'YOU LOSE'}, this.updateScore)
    } else if (yourOptionId === opponentOptionId) {
      this.setState({result: 'IT IS DRAW'}, this.updateScore)
    }
  }

  updateScore = result => {
    if (result === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      this.setState(prevState => ({score: prevState.score}))
    }
  }

  updateGameStatus = () => {
    this.setState(prevState => ({showResult: !prevState.showResult}))
  }

  render() {
    const {
      score,
      result,
      showResult,
      opponentOptionImageUrl,
      selectedOptionImageUrl,
    } = this.state

    const {choicesList} = this.props
    return (
      <GameContext.Provider
        value={{
          score,
          result,
          checkResults: this.checkResults,
          updateScore: this.updateScore,
          setYourOption: this.setYourOption,
          setOpponentOption: this.setOpponentOption,
          updateGameStatus: this.updateGameStatus,
        }}
      >
        <GameContainer>
          <ScoreCard />
          {showResult ? (
            <ResultView
              opponentOptionImageUrl={opponentOptionImageUrl}
              selectedOptionImageUrl={selectedOptionImageUrl}
            />
          ) : (
            <PlayingView choicesList={choicesList} />
          )}
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <PopUpCard>
                <CloseButton type="button" onClick={() => close()}>
                  {/* <CloseIcon /> */}
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
      </GameContext.Provider>
    )
  }
}

export default Game
