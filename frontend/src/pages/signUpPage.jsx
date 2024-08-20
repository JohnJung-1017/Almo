import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import Copyright from "../components/copyright.jsx";
import axios from "axios";
import "../css/signUp.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      setError("약관에 동의하셔야 합니다.");
      return;
    }

    const userData = {
      username: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        userData
      );
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("There was an error creating the user!", error);
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="main_content">
      <NavBar />
      <div className="main_content">
        <div className="signUp">
          <div className="signUp_box">
            <div className="signIn_title">
              <div className="nav_logo"></div>
              <div className="nav_name">
                <div className="nav_title_light">모든알바 모든리뷰</div>
                <div className="nav_title_bold">ALMO</div>
              </div>
            </div>
            <form onSubmit={onsubmit}>
              <div className="form_group">
                <label for="id">아이디</label>
                <input
                  className="signUp_input"
                  name="email"
                  type="text"
                  placeholder="이메일"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label for="password">비밀번호</label>
                <input
                  className="signUp_input"
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label for="name">이름</label>
                <input
                  className="signUp_input"
                  name="name"
                  type="text"
                  placeholder="이름 입력"
                  required
                />
              </div>
              <div className="form_group">
                <label for="birth">생년월일</label>
                <input
                  className="signUp_input"
                  name="birth"
                  type="date"
                  placeholder="YYMMDD"
                  required
                />
              </div>
              <div className="form_group">
                <input
                  className="signUp_input"
                  name="phone"
                  id="phone"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  placeholder="전화번호 예시 : 010-1234-1234"
                  required
                />
                <button className="phone_auth" type="submit">
                  인증요청
                </button>
              </div>
              <div className="form_group">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                />
                <label htmlFor="terms">
                  <span>약관에 동의합니다</span>
                  <a href="/terms" target="_blank" rel="noopener noreferrer">
                    약관보기
                  </a>
                </label>
              </div>
              {error && <p className="error_message">{error}</p>}
              <div className="form_group">
                <button type="submit" disabled={!termsAccepted}>
                  회원가입 완료
                </button>
              </div>
            </form>
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default SignUpPage;
