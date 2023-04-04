import {Component} from 'react'

import {
  PlayingViewContainer,
  RockAndScissorContainer,
  PaperContainer,
  RockButton,
  Image,
} from './styledComponents'

import Option from '../Option'

class PlayingView extends Component {
  state = {rockImageUrl: '', scissorImageUrl: '', paperImageUrl: ''}

  setSelectedAndOpponentOption = selectedId => {
    const {choicesList, updateSelectedAndOpponentOption} = this.props

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const randomOption = choicesList[randomIndex]

    const selectedOption = choicesList.find(
      eachItem => eachItem.id === selectedId,
    )
    const {imageUrl, id} = selectedOption
    const selectedOptionImageUrl = imageUrl
    const selectedOptionId = id
    updateSelectedAndOpponentOption(
      selectedOptionImageUrl,
      selectedOptionId,
      randomOption,
    )
  }

  render() {
    const {choicesList} = this.props

    return (
      <PlayingViewContainer>
        <RockAndScissorContainer>
          {choicesList.map(eachItem => {
            if (eachItem.id === 'ROCK' || eachItem.id === 'SCISSORS') {
              return (
                <Option
                  optionDetails={eachItem}
                  setSelectedAndOpponentOption={
                    this.setSelectedAndOpponentOption
                  }
                  key={eachItem.id}
                />
              )
            }
            return null
          })}
        </RockAndScissorContainer>
        <PaperContainer>
          {choicesList.map(eachItem => {
            if (eachItem.id !== 'ROCK' && eachItem.id !== 'SCISSORS') {
              return (
                <Option
                  optionDetails={eachItem}
                  setSelectedAndOpponentOption={
                    this.setSelectedAndOpponentOption
                  }
                  key={eachItem.id}
                />
              )
            }
            return null
          })}
        </PaperContainer>
      </PlayingViewContainer>
    )
  }
}
export default PlayingView
