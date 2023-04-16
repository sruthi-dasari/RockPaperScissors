import React from 'react'

const GameContext = React.createContext({
  score: 0,
  checkResults: () => {},
  updateScore: () => {},
  setYourOption: () => {},
  setOpponentOption: () => {},
  setYourOptionImageUrl: () => {},
  setOpponentOptionImageUrl: () => {},
  updateGameStatus: () => {},
})

export default GameContext
