import { use } from "react";
import { useState } from "react"

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false)
    let [clicks, setClicks] = useState(0)

    console.log('Component is rendered');

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks + 1)
    }
    let likeStyle = {color:'red'}
    
    return (
        <div>
            <p>Clicks : {clicks}</p>
            <p onClick={toggleLike}>
            {!isLiked ?
            (<i className="fa-regular fa-heart fa-2xl"></i>) :
            (<i className="fa-solid fa-heart fa-2xl" style={likeStyle}></i>)
            }
            </p>
        </div>
    )
}