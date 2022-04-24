import React from 'react'
import { IState as IProps } from '../App'



const PlayerList: React.FC<IProps> = ({ players }) => {
    return (
        <>
            {players.map(player => (
                <li className='List'>
                    <div className='List-header'>
                        <h2>Player details: {player.name} {player.surname}</h2>
                        <h3>Player age: {player.age}</h3>
                        <h3>Player {player.age < 30 ? "is active." : "is inactive."}</h3>
                        <h3>Player motto: {player.note}</h3>
                    </div>
                </li>
            ))}
        </>
    )
}

export default PlayerList