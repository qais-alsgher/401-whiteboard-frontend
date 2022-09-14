import React from 'react';

function CommentForPost(props) {
    return (
        <div>
            <p>{props.comment.commintAuther}</p>
            <p>{props.comment.commintContent}</p>
        </div>
    )
}

export default CommentForPost;
