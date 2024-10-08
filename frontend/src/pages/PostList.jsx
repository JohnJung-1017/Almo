import React, { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";
import "../css/postList.css";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(4);
  const [sortBy, setSortBy] = useState("views");
  const [sortDirection, setSortDirection] = useState("desc");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, [page, size, sortBy, sortDirection]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/post/posts", {
        params: {
          page: page,
          size: size,
          sortBy: sortBy,
          sortDirection: sortDirection,
        },
      });
      setPosts(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  const handlePostCreated = () => {
    setPage(0); // 새 포스트를 추가한 후 첫 페이지로 이동
    fetchPosts();
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleDirectionChange = (e) => {
    setSortDirection(e.target.value);
  };

  return (
    <div className="posts-container">
      

      <div className="posts-header">
        <div className="sort-controls">
          <label htmlFor="sortBy">Sort by: </label>
          <select id="sortBy" value={sortBy} onChange={handleSortChange}>
            <option value="views">Views</option>
            <option value="likes">likes</option>
            <option value="createdAt">CreationDate</option>
          </select>

          <label htmlFor="sortDirection">Sort direction: </label>
          <select
            id="sortDirection"
            value={sortDirection}
            onChange={handleDirectionChange}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <button>
            <Link to={`/post/create`}>
              <h3>글쓰기</h3>
            </Link>
          </button>
        </div>
      </div>

      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`} className="post_link">
              <h3 className="post-title">{post.title}</h3>
            </Link>
            
            <p className="post-content">{post.content}</p>
            <p className="post-details">
              <span>By: {post.username}</span> |{" "}
              <span>Category: {post.category}</span> |{" "}
              <span>Views: {post.views}</span> |{" "}
              <span>Likes: {post.likes}</span>
            </p>
            <p className="post-date">
              Posted on: {new Date(post.createAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={page <= 0}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {page + 1} of {totalPages}
        </span>
        <button
          className="pagination-btn"
          disabled={page >= totalPages - 1}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
