import React, { useState } from "react";
import axios from "axios";
import "../css/PostForm.css";
import NavBar from "../components/navBar";
import Copyright from "../components/copyright";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 로컬스토리지에서 토큰 가져오기
    const token = localStorage.getItem("token"); 
    const username = localStorage.getItem("loginComplete");

    try {
      const newPost = {
        title: title,
        content: content,
        category: category,
        username: username, // 실제 로그인된 사용자 이름을 여기에 추가
      };

      // 토큰을 Authorization 헤더에 포함시켜 요청
      await axios.post("http://localhost:8080/post", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

       // 포스트 작성 후 부모 컴포넌트에 알림
      setTitle("");
      setContent("");
      setCategory("");
    } catch (error) {
      console.error("Error creating post", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main_content">
      <NavBar />
      <div className="main_content">
        <form className="post-form" onSubmit={handleSubmit}>
          <h2>Create a New Post</h2>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your content here"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (e.g., Cafe, Tech)"
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Post"}
          </button>
        </form>
        <Copyright />
      </div>
    </div>
  );
};

export default PostForm;
