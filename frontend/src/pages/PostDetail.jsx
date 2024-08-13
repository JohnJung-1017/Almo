import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/postDetail.css"; // Ensure you have this file for styling

const PostDetail = () => {
  const { postId } = useParams(); // Extract postId from URL
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("postId", postId);

  useEffect(() => {
    
    axios
      .get(`http://localhost:8080/post/${postId}`)
      .then((response) => {
        setPost(response.data); // Set the fetched post data
        return axios.get(`http://localhost:8080/comment/${postId}`); // Fetch comments
      })
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
      });
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="post_detail_container">
      <h1 className="post_title">{post.title}</h1>
      <p className="post_author">By {post.username}</p>
      <p className="post_category">Category: {post.category}</p>
      <p className="post_views">Views: {post.views}</p>
      <p className="post_likes">Likes: {post.likes}</p>
      <div className="post_content">{post.content}</div>

      <div className="comments_section">
        <h2 className="comments_title">Comments</h2>
        {comments.length > 0 ? (
          <ul className="comments_list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment_item">
                <p className="comment_author">{comment.username}</p>
                <p className="comment_content">{comment.content}</p>
                <p className="comment_date">
                  {new Date(comment.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
