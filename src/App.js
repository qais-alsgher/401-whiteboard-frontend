import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

function App() {

  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  const getPosts = async () => {
    const allPosts = await axios.get(`https://message-postgres.herokuapp.com/post`);
    setPosts(allPosts.data.post);
    setShowPosts(true);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Post posts={posts} />

    </div>
  );
}

export default App;
