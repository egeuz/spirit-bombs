import React, {useReducer} from 'react'
import Player from './Components/Player'
import './Styles/base.css'

const initialState = {
  winner: "",
  currentTurn: 1,
  player1: {
    id: 1,
    name: "Ege",
    hitChance: 0,
    chargeKey: 'A',
    attackKey: 'S'
  },
  player2: {
    id: 2,
    name: "Can",
    hitChance: 0,
    chargeKey: 'L',
    attackKey: 'K'

  }
}

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT_HIT_CHANCE':
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          hitChance: state[action.player].hitChance + action.amount
        }
      }
    case 'RESET_HIT_CHANCE':
      return {
        ...state,
        [action.player]: {
          ...state[action.player],
          hitChance: 0
        }
      }
    case 'END_TURN':
      return {
        ...state,
        currentTurn: state.currentTurn === 1 ? 2 : 1
      }
    case 'WIN':
      return {
        ...state,
        winner: action.player
      }
    default:
      return state;
  }
}

function App() {
  
  const [playState, dispatch] = useReducer(reducer, initialState);
  console.log(playState.currentTurn);
  if (playState.winner) console.log(playState.winner + " wins!");

  return (
    <div id="player-container">
      <Player turn={playState.currentTurn === 1} dispatch={dispatch} player={playState.player1}/>
      <Player turn={playState.currentTurn === 2} dispatch={dispatch} player={playState.player2}/>
    </div>
  )
}

export default App
