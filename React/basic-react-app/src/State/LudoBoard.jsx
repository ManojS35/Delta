import { useState } from "react"

export default function LudoBoard() {
    let [moves, cntMoves] = useState({blue : 0, yellow : 0, green : 0, red : 0})
    let updateBlue = () => {
        cntMoves((prevMoves) => {
            return {...prevMoves, blue : prevMoves.blue + 1};
        })
    }
    let updateYellow = () => {
        cntMoves((prevMoves) => {
            return {...prevMoves, yellow : prevMoves.yellow + 1};
        })
    }
    let updateGreen = () => {
        cntMoves((prevMoves) => {
            return {...prevMoves, green : prevMoves.green + 1};
        })
    }
    let updateRed = () => {
        cntMoves((prevMoves) => {
            return {...prevMoves, red : prevMoves.red + 1};
        })
    }

    return (
        <div>
            <h3>LudoBoard</h3>
            <p>Blue Moves : {moves.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>
            <p>Yelllow Moves : {moves.yellow}</p>
            <button style={{backgroundColor : "yellow", color : 'black' }} onClick={updateYellow}>+1</button>
            <p>Green Moves : {moves.green}</p>
            <button style={{backgroundColor : "Green"}} onClick={updateGreen}>+1</button>
            <p>Red Moves : {moves.red}</p>
            <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>
        </div>
    )
}