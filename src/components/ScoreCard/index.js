import {
  OptionName,
  ScoreCardContainer,
  OptionNamesContainer,
  ScoreContainer,
  ScoreHeading,
  ScoreValue,
} from './styledComponents'

const ScoreCard = () => (
  <ScoreCardContainer>
    <OptionNamesContainer>
      <OptionName>ROCK</OptionName>
      <OptionName>PAPER</OptionName>
      <OptionName>SCISSORS</OptionName>
    </OptionNamesContainer>
    <ScoreContainer>
      <ScoreHeading>Score</ScoreHeading>
      <ScoreValue>0</ScoreValue>
    </ScoreContainer>
  </ScoreCardContainer>
)

export default ScoreCard
