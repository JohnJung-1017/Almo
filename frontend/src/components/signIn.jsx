import React, { useState } from "react";
import axios from "axios"; // Axios를 import
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar.jsx";
import "../css/signIn.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        username: username,
        password: password,
      });

      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        setError("로그인에 실패했습니다.");
      }
    } catch (err) {
      setError("로그인에 실패했습니다. 아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <div className="main_background">
      <NavBar />
      <div className="main_content">
        <div className="signIn_container">
          <div className="signIn_title">
            <div className="nav_logo"></div>
            <div className="nav_name">
              <div className="nav_title_light">모든알바 모든리뷰</div>
              <div className="nav_title_bold">ALMO</div>
            </div>
          </div>
          <div className="logIn">
            <div className="logIn_box">
              <form onSubmit={handleLogin}>
                <div className="form_group">
                  <input
                    className="logIn_box_input"
                    name="username"
                    type="text"
                    placeholder="아이디"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <input
                    className="logIn_box_input"
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="logIn_button">
                  <input
                    className="logIn_box_button"
                    type="submit"
                    value="로그인"
                  />
                </div>
              </form>
              {error && <p className="error_message">{error}</p>}
            </div>
          </div>
          <div className="logIn_find">
            <div className="logIn_find_box1">
              <Link className="sign_link" to={"/signUp"}>
                회원가입
              </Link>
              <Link className="sign_link" to={"/signIn"}>
                아이디 찾기
              </Link>
              <Link className="sign_link" to={"/signIn"}>
                비밀번호 찾기
              </Link>
            </div>
            <div className="logIn_find_box2">
              <div className="nav_logo"></div>
              <div className="nav_logo"></div>
              <div className="nav_logo"></div>
              <div className="nav_logo"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
