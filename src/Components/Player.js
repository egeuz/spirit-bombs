import React from 'react'
import '../Styles/player.css'

function Player({turn, dispatch, player}) {

  const chargeUp = () => {
    dispatch({
      type: 'INCREMENT_HIT_CHANCE',
      player: `player${player.id}`,
      amount: 10
    })
    dispatch({type: 'END_TURN'})
  }

  const attack = () => {
    if (Math.random() < (player.hitChance / 100)) {
      console.log('enemy hit!')
      dispatch({type: 'WIN', player: `player${player.id}`})

    } else {
      console.log('attack missed!')
      dispatch({type: 'RESET_HIT_CHANCE', player: `player${player.id}`})
      dispatch({type: 'END_TURN'})
    }

  }

  return (
    <div id={`player${player.id}`} className="player">
      <h3 className="player-id">P{player.id}</h3>
      <p className="player-name">{player.name}</p>
      <div className={`player-sprite player-sprite-${player.id}`}></div>
      <p className="hit-chance">
        {player.hitChance}%
        <span>CHANCE TO HIT</span>
      </p>
      <button disabled={!turn} className="charge-btn" onClick={chargeUp}>Charge Up</button>
      <button disabled={!turn} className="attack-btn" onClick={attack}>Attack!!!</button>
    </div>
  )
}

export default Player
