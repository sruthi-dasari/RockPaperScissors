import {
  PlayingViewContainer,
  RockAndScissorContainer,
  PaperContainer,
} from './styledComponents'

import Option from '../Option'
import GameContext from '../../context/GameContext'

const PlayingView = props => (
  <GameContext.Consumer>
    {value => {
      console.log('In PlayingView component')
      const {setOpponentOption} = value

      const {choicesList} = props

      const getRandomOptionId = () => {
        const randomIndex = Math.floor(Math.random() * choicesList.length)
        const randomOption = choicesList[randomIndex]
        const {id} = randomOption
        const randomOptionId = id
        setOpponentOption({randomOptionId})
      }

      return (
        <PlayingViewContainer>
          <RockAndScissorContainer>
            {choicesList.map(eachItem => {
              if (eachItem.id === 'ROCK') {
                return (
                  <Option
                    optionDetails={eachItem}
                    key={eachItem.id}
                    getRandomOptionId={getRandomOptionId}
                    data-testid="rockButton"
                  />
                )
              }
              return null
            })}
            {choicesList.map(eachItem => {
              if (eachItem.id === 'SCISSORS') {
                return (
                  <Option
                    optionDetails={eachItem}
                    key={eachItem.id}
                    getRandomOptionId={getRandomOptionId}
                    data-testid="scissorsButton"
                  />
                )
              }
              return null
            })}
          </RockAndScissorContainer>
          <PaperContainer>
            {choicesList.map(eachItem => {
              if (eachItem.id === 'PAPER') {
                return (
                  <Option
                    optionDetails={eachItem}
                    getRandomOptionId={getRandomOptionId}
                    key={eachItem.id}
                    data-testid="paperButton"
                  />
                )
              }
              return null
            })}
          </PaperContainer>
        </PlayingViewContainer>
      )
    }}
  </GameContext.Consumer>
)

export default PlayingView
