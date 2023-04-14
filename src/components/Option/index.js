import {OptionButton, Image} from './styledComponents'
import GameContext from '../../context/GameContext'

const Option = props => (
  <GameContext.Consumer>
    {value => {
      const {setYourOption, updateGameStatus} = value

      const {optionDetails, getRandomOptionId} = props
      const {id, imageUrl} = optionDetails

      const onClickOption = () => {
        setYourOption(id)
        getRandomOptionId()
        updateGameStatus()
      }

      return (
        <OptionButton type="button" id={id} onClick={onClickOption}>
          <Image src={imageUrl} alt={id} />
        </OptionButton>
      )
    }}
  </GameContext.Consumer>
)

export default Option
