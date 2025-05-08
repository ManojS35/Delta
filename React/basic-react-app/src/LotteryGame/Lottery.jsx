import { useState } from "react"
import { generateTicket, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(generateTicket(n))
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket}>Load New Ticket</button>
            <h3>{isWinning && "Congratulations, you Won!"}</h3>
        </div>
    )
}