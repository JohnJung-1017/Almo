// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Pagination from '@mui/material/Pagination';
// import { Container, Box, Typography, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import '../css/postList.css';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [pageSize] = useState(10);  // 페이지당 표시할 포스트 수
//   const [totalPages, setTotalPages] = useState(1);
//   const [sortBy, setSortBy] = useState('views');
//   const [sortDirection, setSortDirection] = useState('desc');

//   useEffect(() => {
//     fetchPosts(page, pageSize, sortBy, sortDirection);
//   }, [page, sortBy, sortDirection]);

//   const fetchPosts = async (page, size, sortBy, sortDirection) => {
//     try {
//       const response = await axios.get('http://localhost:8080/post/posts', {
//         params: {
//           page: page - 1,  // Spring Boot는 페이지 번호를 0부터 시작합니다.
//           size: 4,
//           sortBy: sortBy,
//           sortDirection: sortDirection,
//         },
//       });

//       console.log(response);

//     //   setPosts(response.data.content);
//     //   setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   const handleDirectionChange = (event) => {
//     setSortDirection(event.target.value);
//   };

//   return (
//     <Container className="post-list-container">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" component="h1" gutterBottom className="post-list-title">
//           Post List
//         </Typography>
//         <Box className="post-list-controls">
//           <FormControl variant="outlined" className="post-list-select">
//             <InputLabel>Sort By</InputLabel>
//             <Select value={sortBy} onChange={handleSortChange} label="Sort By">
//               <MenuItem value="views">Views</MenuItem>
//               <MenuItem value="likes">Likes</MenuItem>
//               <MenuItem value="creationDate">Creation Date</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl variant="outlined" className="post-list-select">
//             <InputLabel>Direction</InputLabel>
//             <Select value={sortDirection} onChange={handleDirectionChange} label="Direction">
//               <MenuItem value="asc">Ascending</MenuItem>
//               <MenuItem value="desc">Descending</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <Box className="post-list-content">
//           {posts.map((post) => (
//             <Card key={post.id} className="post-list-card">
//               <CardContent>
//                 <Typography variant="h5" component="div" className="post-list-card-title">
//                   {post.title}
//                 </Typography>
//                 <Typography className="post-list-card-subtitle" color="text.secondary">
//                   By {post.username} in {post.category}
//                 </Typography>
//                 <Typography variant="body2" className="post-list-card-content">
//                   {post.content}
//                 </Typography>
//                 <Typography variant="caption" display="block" gutterBottom className="post-list-card-meta">
//                   Views: {post.views} | Likes: {post.likes}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={handlePageChange}
//           className="post-list-pagination"
//         />
//       </Box>
//     </Container>
//   );
// };

// export default PostList;
