import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import db from "./firebase";

function App() {
  const [post, setPost] = useState([]);
  // useEffect runs a piece of code based on specific conditions(variables)
  useEffect(() => {
    db.collection("post").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });
  }, []);
  return (
    <div className="App">
      {/* header */}
      <div className="app__header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW6Ork6idHNOFfvbmcXllJke67X87YdgtVQ&usqp=CAU"
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnEYJW-xEz-zU-C81qxgdTHcTToXctChfjw&usqp=CAU"
          className="app__headerImage"
        />
      </div>
      {/* Posts */}
      {post.map((p) => {
        return (
          <Post
            username={p.username}
            imageUrl={p.imageUrl}
            caption={p.caption}
          />
        );
      })}
    </div>
  );
}

export default App;
