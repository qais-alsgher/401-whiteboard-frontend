import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";
function CommentForPost(props) {
    return (
        <div className='coment-post'>
            <h6>{props.comment.commintAuther}:</h6>
            <div className='comment-row'>
                <BsArrowReturnRight className='row-poenter' />
                <p>{props.comment.commintContent}</p>
            </div>
        </div>
    )
}


export default CommentForPost;
