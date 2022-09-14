import React from 'react';
import CaedPost from './CaedPost';

function Post(props) {
    return (
        <div>
            {
                props.posts.map((ele, indxe) => {
                    return (
                        <div key={indxe}>
                            <CaedPost post={ele} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Post;
