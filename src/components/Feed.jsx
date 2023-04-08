import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {addPost} from "../actions/feedActions";
import './Feed.css'

function Feed() {
    const dispatch = useDispatch()
    const postsList = useSelector(state => state.posts)

    const handleAddPost = () => {
        let content = prompt('Enter text for the post')
        let name = prompt('Enter name')
        let userName = prompt('Enter username')

        if (content === '' || content === null) {
            content = 'No text entered'
        }
        if (name === '' || name === null) {
            name = 'NoName'
        }
        if (userName === '' || userName === null) {
            userName = 'noUserName'
        }

        const newPost = {
            content,
            username: userName,
            name,
            img: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
            date: new Date(Date.now()).toLocaleString()
        }
        dispatch(addPost(newPost))
    }

    return (
        <div className="container">
            <div className="welcome">Welcome to
                <section className="wrapper">
                    <div className="top">FEED</div>
                    <div className="bottom" aria-hidden="true">FEED</div>
                </section>
            </div>
            {postsList.map(post => <Post key={post.id} date={post.date} content={post.content}
                                         id={post.id} name={post.name} username={post.username} img={post.img} />)}
            <button onClick={handleAddPost} className="button-add">Add post</button>

        </div>
    );
}

export default Feed;
