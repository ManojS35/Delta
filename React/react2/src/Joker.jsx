import { useEffect, useState } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke"

    useEffect(() => {
        getNewJoke();
    }, [])

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let data = await response.json();
        setJoke(data);
    }

    return (
        <div>
            <h3>Joker!</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    )
}