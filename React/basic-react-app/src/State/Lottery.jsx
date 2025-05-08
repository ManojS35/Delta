import { useState } from "react"
import { generateTicket, sum } from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(generateTicket(3))
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Load New Ticket</button>
            <h3>{isWinning && "Congratulations, you Won!"}</h3>
        </div>
    )
}