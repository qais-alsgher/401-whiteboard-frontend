import { React, useState } from 'react';
import Card from 'react-bootstrap/Card';
import AddCommentForm from './AddCommentForm';
import { useAuth0 } from "@auth0/auth0-react";
import { FaComment, FaEyeSlash } from "react-icons/fa";

function CaedPost(props) {

    const { user, isAuthenticated } = useAuth0();
    const [showComment, setShowComent] = useState(false);
    const hanleShow = () => {
        setShowComent(true);
    }
    const handleHidleComment = () => {
        setShowComent(false);
    }

    return (
        <div>
            <Card className="post">

                <Card.Text className='post-name'>{props.post.postAouthr}<button onClick={() => { props.handleDelete(props.post.postAouthr, props.post.id) }}>X</button></Card.Text>
                <Card.Title className='post-text' >{props.post.postTitle}</Card.Title>

                <Card.Img variant="top" src={props.post.postImge} />
                <Card.Body className='body-card-post'>
                    <Card.Text className='post-text'>
                        {props.post.postContent}
                    </Card.Text>
                    <hr />
                </Card.Body>
                {(isAuthenticated && !showComment) &&
                    <FaComment className='icon-comment' onClick={hanleShow} />

                }

                {showComment &&
                    <div className='icon-hiden' >
                        <FaEyeSlash onClick={handleHidleComment} />
                    </div>
                }

                {!isAuthenticated &&
                    <p className='commentNon'>Pls Login To Can Comment</p>
                }
                {showComment &&
                    <AddCommentForm
                        commentPost={props.post}
                        name={user.name}
                        getPostComment={props.getPostComment} />
                }
            </Card>
        </div>
    )
}

export default CaedPost;
