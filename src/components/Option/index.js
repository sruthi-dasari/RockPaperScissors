import {OptionButton, Image} from './styledComponents'

const Option = props => {
  const {optionDetails, setSelectedAndOpponentOption, checkResults} = props
  const {id, imageUrl} = optionDetails

  const onClickOption = () => {
    checkResults(id)
    setSelectedAndOpponentOption(id)
  }

  return (
    <OptionButton id={id} onClick={onClickOption}>
      <Image src={imageUrl} alt="image" />
    </OptionButton>
  )
}

export default Option
