import React from 'react'

export default function Comment({comment, post, deleteComment}) {
    return (
        <li className="list-group-item">
            <h6 className="card-title separated">
                <span>{comment.user.name}</span>
                {parseInt(localStorage.getItem('user_id')) === comment.user_id && <span className="badge badge-danger cursor-pointer" onClick={e => deleteComment(post.id, comment.id)}>Delete</span>}
            </h6>
            <p>{comment.body}</p>
        </li>
    )
}
