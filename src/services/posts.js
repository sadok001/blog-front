import axios from "axios";

const getPosts = async () => {
    const {data} = await axios.get('http://localhost:8000/api/posts', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    return data.posts;
}

const createPost = async (text) => {
    const {data} = await axios({
        method: 'post',
        url: 'http://localhost:8000/api/posts',
        data: {
         body: text
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-type': 'application/json'
        }
      });

    return data.post;
}

const addCommentToPost = async (postId, text) => {
    const {data} = await axios({
        method: 'post',
        url: `http://localhost:8000/api/posts/${postId}/comment`,
        data: {
         body: text
        },
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-type': 'application/json'
        }
      });

    return data.comment;
}

const postDelete = async (postId) => {
    const {data} = await axios({
        method: 'delete',
        url: `http://localhost:8000/api/posts/${postId}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    }); 

    return data.post;
}

const commentDelete = async (commentId) => {
    const {data} = await axios({
        method: 'delete',
        url: `http://localhost:8000/api/comments/${commentId}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    }); 

    return data.comment;
}

export {
    getPosts,
    createPost,
    addCommentToPost,
    postDelete,
    commentDelete,
};