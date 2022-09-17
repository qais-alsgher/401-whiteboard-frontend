import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
function CommentForPost(props) {
    return (
        <div className='coment-post'>
            <h6>{props.comment.commentAuther}:</h6>
            <div className='comment-row'>
                <BsArrowReturnRight className='row-poenter' />
                <p>{props.comment.commentContent}</p>
            </div>
        </div>
    )
}


export default CommentForPost;
