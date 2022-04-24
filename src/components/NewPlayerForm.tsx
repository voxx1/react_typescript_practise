import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
    playersData: Props['players'];
    setPlayersData: React.Dispatch<React.SetStateAction<{
        name: string;
        surname: string;
        age: number;
        note: string;
    }[]>>
}


const NewPlayerForm: React.FC<IProps> = ({ playersData, setPlayersData }) => {

    const [newPlayer, setNewPlayer] = useState({
        name: "",
        surname: "",
        age: "",
        note: "",

    });

    const [correctValues, setCorrectValue] = useState(true)

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPlayer({
            ...newPlayer,
            [event.target.name]: event.target.value
        })
    }

    const newInput = (): void => {
        if (!newPlayer.name || !newPlayer.age || !newPlayer.surname || !newPlayer.note) {
            setCorrectValue(false)
            return
        }


        setPlayersData([
            ...playersData, {
                name: newPlayer.name,
                surname: newPlayer.surname,
                age: parseInt(newPlayer.age),
                note: newPlayer.note

            }
        ])

        setNewPlayer(({
            name: "",
            surname: "",
            age: "",
            note: "",

        }))

        setCorrectValue(true)
    }

    return (
        <div className='AddToList'>
            <input
                type='text'
                required
                placeholder="Player name"
                className='AddToList-Input'
                value={newPlayer.name}
                name='name'
                onChange={inputHandler}
            />
            <input
                type='text'
                required
                placeholder="Player surname"
                className='AddToList-Input'
                value={newPlayer.surname}
                name='surname'
                onChange={inputHandler}

            />
            <input
                type='number'
                required
                placeholder="Player age"
                className='AddToList-Input'
                value={newPlayer.age}
                name='age'
                onChange={inputHandler}

            />
            <textarea
                placeholder="Player note"
                className='AddToList-Input'
                value={newPlayer.note}
                name='note'
                onChange={inputHandler}
                required
            />
            <button onClick={newInput} className='AddToList-btn'>Add new player!</button>
            {!correctValues ? <p>Fill all gaps!</p> : null}
        </div>
    )
}

export default NewPlayerForm