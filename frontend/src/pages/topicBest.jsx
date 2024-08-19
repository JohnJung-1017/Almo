import React from 'react';
import NavBar from '../components/navBar.jsx';
import Copyright from '../components/copyright.jsx';
import PostList from './PostList.jsx';

const TopicBest = () => {
  return (
    <div className='main_content'>
        <NavBar/>
        <div className='main_content'>
            <PostList/>
            <Copyright/>
        </div>
    </div>
  )
}

export default TopicBest