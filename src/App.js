import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Container from 'react-bootstrap/Container';

function App() {

  const [postsAndComment, setPostsAndComment] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const getPostCommint = async () => {
    const allPostsAndComment = await axios.get(`https://message-postgres.herokuapp.com/PostCommint`);
    setPostsAndComment(allPostsAndComment.data);
    setShowPosts(true);
  };

  useEffect(() => {
    getPostCommint();
  }, []);

  return (
    <div className="App">
      <Container>
        <Header getPostCommint={getPostCommint} />
    {showPosts &&
        <Post
          posts={postsAndComment}
          getPostCommint={getPostCommint}
          className="d-flex justify-content-center"
        />
    }
      </Container>
    </div>
  );
}

export default App;
