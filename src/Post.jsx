import React from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      {/* header-> avatar + username */}
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      {/* Image */}
      <img className="post__image" src={imageUrl} alt="" />

      {/* username + caption */}
      <p className="post__text">
        <strong>{username} : </strong> {caption}
      </p>
    </div>
  );
}

export default Post;