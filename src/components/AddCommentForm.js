import React from 'react';
import axios from 'axios';

function AddCommentForm(props) {
    const handleCreateComment = async (e) => {
        e.preventDefault();
        const newComment = {
            commintContent: e.target.comment,
            postId: props.postId
        }
    };
    return (
        <div>
            <form onSubmit={handleCreateComment}>
                <input type="text" name="comment" placeholder='Add Comment' />
            </form>
        </div>
    )
}

export default AddCommentForm;
