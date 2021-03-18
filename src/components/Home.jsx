import React, {useEffect, useState} from 'react';
import { getPosts,createPost, addCommentToPost, postDelete, commentDelete } from "../services/posts";
import NavBar from './layouts/NavBar';
import CreatePost from './posts/CreatePost';
import Post from './posts/Post';

export default function Home() {
    const [posts, setPosts] = useState([]);

    const handlePostCreated = async (text) => {
        const newPost = await createPost(text);

        setPosts(prev => [newPost, ...prev])
    }

    const handleAddComment = async (postId, text) => {
        const comment = await addCommentToPost(postId, text);

        let newPosts = [...posts];
        const postIndex = newPosts.findIndex(post => post.id === postId);
        newPosts[postIndex].comments = [comment, ...newPosts[postIndex].comments]

       setPosts(prev => newPosts);
    }

    const handleDeletePost = async (postId) => {
        await postDelete(postId);
        let newPosts = [...posts];
        const postIndex = newPosts.findIndex(post => post.id === postId);

        newPosts.splice(postIndex, 1);

       setPosts(prev => newPosts);
    }

    const handleDeleteComment = async (postId, commentId) => {
        await commentDelete(commentId);

        let newPosts = [...posts];
        const postIndex = newPosts.findIndex(post => post.id === postId);
        let newComments = newPosts[postIndex].comments.filter(comment => comment.id !== commentId)
        
        newPosts[postIndex].comments = newComments;

       setPosts(prev => newPosts);
    }

    useEffect(() => {
        async function fetchApi() {
            const posts = await getPosts();
            setPosts(posts);
        }

        fetchApi();
    }, [])


    return (
        <>
            <NavBar />
            <div className="container">
                <div className="card mt-5">
                    <CreatePost postCreated={handlePostCreated} />
                </div>
                {posts.map(post => <Post post={post} commentAdded={handleAddComment} deletePost={handleDeletePost} deleteComment={handleDeleteComment} key={post.id} />)}  
            </ div>
        </>
    )
}
