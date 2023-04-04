import {OptionButton, Image} from './styledComponents'

const Option = props => {
  const {optionDetails, setSelectedAndOpponentOption} = props
  const {id, imageUrl} = optionDetails

  const onClickOption = () => {
    setSelectedAndOpponentOption(id)
  }

  return (
    <OptionButton id={id} onClick={onClickOption}>
      <Image src={imageUrl} alt="image" />
    </OptionButton>
  )
}

export default Option
