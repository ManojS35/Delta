import {useState} from "react";
import CommentsForm from "./CommentsForm";
import "./Comment.css"

export default function Comments() {
    let [comments, setComments] = useState([{
        username : 'ms',
        remarks : 'great place!',
        rating : 5
    }])

    let addNewComment = (comment) => {
        setComments((currComments) =>
            [...currComments, comment]
        )
    }

    return (
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;
                    <span>(rating = {comment.rating})</span>
                    <p>-@{comment.username}</p>
                </div>
            ))}
        </div>
        <hr /><hr />
        <CommentsForm addNewComment={addNewComment}/>
        </>
    )
}