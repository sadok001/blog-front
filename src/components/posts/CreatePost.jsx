import React, {useState} from 'react'

export default function CreatePost({postCreated}) {
    const [text, setText] = useState("")

    const createPost = e => {
        postCreated(text)
        setText('')
    }

    return (
        <div className="card-body">
            <textarea className="form-control" rows="3" placeholder="Write something here..." onChange={e => setText(e.target.value)} value={text}></textarea>
            <button className="btn btn-primary mt-2" onClick={createPost}>Add Post</button>
        </div>
    )
}
