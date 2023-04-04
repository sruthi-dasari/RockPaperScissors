import {
  PlayingViewContainer,
  RockAndScissorContainer,
  PaperContainer,
} from './styledComponents'

import Option from '../Option'

const PlayingView = props => {
  const {choicesList, updateSelectedAndOpponentOption} = props

  const setSelectedAndOpponentOption = id => {
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const randomOption = choicesList[randomIndex]

    const selectedOption = choicesList.find(eachItem => eachItem.id === id)
    const {imageUrl} = selectedOption
    const selectedOptionImageUrl = imageUrl
    updateSelectedAndOpponentOption(selectedOptionImageUrl, randomOption)
  }

  return (
    <PlayingViewContainer>
      <RockAndScissorContainer>
        {choicesList.map(eachItem => {
          if (eachItem.id !== 'PAPER') {
            return (
              <Option
                optionDetails={eachItem}
                key={eachItem.id}
                setSelectedAndOpponentOption={setSelectedAndOpponentOption}
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
                setSelectedAndOpponentOption={setSelectedAndOpponentOption}
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
export default PlayingView
