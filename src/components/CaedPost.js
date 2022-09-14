import React from 'react';
import Card from 'react-bootstrap/Card';
import AddCommentForm from './AddCommentForm';
import { useAuth0 } from "@auth0/auth0-react";
function CaedPost(props) {
    const { user, isAuthenticated } = useAuth0();
    return (
        <div>
            <Card style={{ width: '100%', margin: "20PX" }}>
                <Card.Text>{props.post.postAouthr}</Card.Text>
                <Card.Img variant="top" src={props.post.postImge} />
                <Card.Body>
                    <Card.Title>{props.post.postTitle}</Card.Title>
                    <Card.Text>
                        {props.post.postContent}
                    </Card.Text>
                    <hr />
                </Card.Body>
                {isAuthenticated &&
                    <AddCommentForm
                        commentPost={props.post}
                        name={user.name}
                        getPostCommint={props.getPostCommint} />
                }
                {!isAuthenticated &&
                    <p>Pls Login To Can Comment</p>
                }
            </Card>
        </div>
    )
}

export default CaedPost;
