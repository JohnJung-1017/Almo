import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Realtime from './pages/realtime';
import Review from './pages/review';
import Recruit from './pages/recruit';
import Support from './pages/support';
import SignIn from './components/signIn';
import SignUp from './components/signUp';
import SignUpPage from './pages/signUpPage';
import TopicBest from './pages/topicBest';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/review" element={<Review />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/realtime" element={<Realtime />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/topicBest" element={<TopicBest />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path='/post/create' element={<PostForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
