import React, {useState} from 'react';
import Comment from './Comment';
import moment from "moment";

export default function Post({post, commentAdded, deletePost, deleteComment}) {
    const [text, setText] = useState('');
    
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h6 className="card-title separated">
                    <span>{post.user.name}</span>
                    {parseInt(localStorage.getItem('user_id')) === post.user_id && <span className="badge badge-danger cursor-pointer" onClick={e => deletePost(post.id)}>Delete</span>}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">{moment(post.created_at).fromNow()}</h6>
                <p className="card-text">{post.body}</p>
                <div className="mt-2">
                    <textarea className="form-control" rows="1" placeholder="Write comment here..." onChange={e => setText(e.target.value)} value={text}></textarea>
                    <button className="btn btn-primary mt-2" onClick={e => {commentAdded(post.id, text); setText('')}}>Comment</button>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                {post.comments && post.comments.map(comment => <Comment comment={comment} post={post} deleteComment={deleteComment} key={comment.id} />)}
            </ul>
        </div>
    )
}
