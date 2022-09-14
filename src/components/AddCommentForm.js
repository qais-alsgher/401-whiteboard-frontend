import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import CommentForPost from './CommentForPost';

function AddCommentForm(props) {

    const [content, setContent] = useState('');

    const handleChange = (e) => {
        setContent(e.target.value)
    };

    const handleCreateComment = async (e) => {
        e.preventDefault();
        console.log(content);
        const newComment = {
            commintAuther: props.name,
            commintContent: content,
            postId: props.commentPost.id
        }

        await axios.post(`https://message-postgres.herokuapp.com/commint`, newComment);
        props.getPostCommint();
        setContent('');
    };
    return (
        <div>
            {
                props.commentPost.commints.map((ele, index) => {
                    return (
                        <div key={index}>
                            < CommentForPost comment={ele} />
                        </div>
                    )
                })
            }
            <form onSubmit={handleCreateComment}>
                <input type="text"
                    name="comment"
                    onChange={handleChange}
                    value={content}
                    placeholder='Add Comment' />
                <button onSubmit={handleCreateComment}>Submit</button>
            </form>
        </div>
    )
}

export default AddCommentForm;
