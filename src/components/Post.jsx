import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost, updatePost} from "../actions/feedActions";
import './Post.css'

function Post({name, username, content, date, id, img}) {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deletePost({id}))
    }
    const handleEdit = () => {
        const editedContent = prompt('Edit content', content)
        console.log(editedContent)
        if (editedContent !== null) {
            dispatch(updatePost({id, content: editedContent}))
        }
    }
    return (
        <div className='post-item'>
            <div className="user-info">
                <div><img src={img} alt={username} width="50"/></div>
                <div>{name}</div>
                <div className="username">@{username}</div>
            </div>
            <div className="content-container">{content}</div>
            <div className="addInfo-container">
                <div className="date-stamp">{date}</div>
                <button onClick={handleDelete} className="post-button">X</button>
                <button onClick={handleEdit} className="post-button">✎</button>
            </div>
        </div>
    );
}

export default Post;
