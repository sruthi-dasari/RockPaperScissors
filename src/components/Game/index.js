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

class Game extends Component {
  state = {
    showResult: false,
    score: 0,
    result: '',
    yourOptionId: '',
    opponentOptionId: '',
    yourOptionImageUrl: '',
    opponentOptionImageUrl: '',
  }

  resetResult = () => {
    this.setState({result: ''})
  }

  updateGameStatus = () => {
    console.log('In updateGameStatus()')
    this.setState(prevState => ({showResult: !prevState.showResult}))
  }

  setYourOption = idObject => {
    console.log('In setYourOption()')
    const {choicesList} = this.props
    // console.log(choicesList)
    // console.log(idObject)
    const yourOption = choicesList.find(eachItem => eachItem.id === idObject.id)
    // console.log(yourOption)
    const {id, imageUrl} = yourOption
    this.setState({yourOptionId: id, yourOptionImageUrl: imageUrl})
  }

  setOpponentOption = idObject => {
    console.log('In setOpponentOption()')
    const {choicesList} = this.props
    console.log(idObject)
    const opponentOption = choicesList.find(
      eachItem => eachItem.id === idObject.randomOptionId,
    )
    // console.log(opponentOption)
    const {id, imageUrl} = opponentOption
    this.setState({opponentOptionId: id, opponentOptionImageUrl: imageUrl})
  }

  updateScore = () => {
    const {score, result} = this.state
    console.log('In updateScore()')
    console.log(`score: ${score}`)
    console.log(result)
    if (result === 'YOU WON') {
      const newScore = score + 1
      console.log(`newScore: ${newScore}`)
      this.setState({score: newScore})
      //   this.setState(prevState => ({score: prevState.score + 1}))
    } else if (result === 'YOU LOSE') {
      const newScore = score - 1
      this.setState({score: newScore})
      //   this.setState(prevState => ({score: prevState.score - 1}))
    } else {
      const newScore = score
      this.setState({score: newScore})
      //   this.setState(prevState => ({score: prevState.score}))
    }
  }

  checkResults = () => {
    console.log('In checkResults()')

    const {yourOptionId, opponentOptionId, result} = this.state
    console.log(yourOptionId, opponentOptionId)
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

  render() {
    console.log('In game render()')

    const {
      score,
      result,
      showResult,
      opponentOptionImageUrl,
      yourOptionImageUrl,
    } = this.state

    console.log(`score: ${score}`)
    console.log(result)
    console.log(`showResult: ${showResult}`)

    const {choicesList} = this.props
    return (
      <GameContext.Provider
        value={{
          score,
          result,
          yourOptionImageUrl,
          opponentOptionImageUrl,
          checkResults: this.checkResults,
          updateScore: this.updateScore,
          setYourOption: this.setYourOption,
          setOpponentOption: this.setOpponentOption,
          updateGameStatus: this.updateGameStatus,
          resetResult: this.resetResult,
        }}
      >
        <GameContainer>
          <ScoreCard />

          {showResult ? (
            <ResultView />
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
