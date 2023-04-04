import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  width: 100%;
`

export const OptionNamesContainer = styled.div`
  background: transparent;
`

export const OptionName = styled.p`
  font-family: 'Bree Serif';
  font-size: 28px;
  color: #ffffff;
  margin: 5px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 150px;
`
export const ScoreHeading = styled.p`
  font-family: 'Bree Serif';
  font-size: 30px;
  color: #223a5f;
  font-weight: 600;
  margin: 5px;
`

export const ScoreValue = styled.p`
  font-family: 'Roboto';
  font-size: 60px;
  color: #223a5f;
  margin: 5px;
`
