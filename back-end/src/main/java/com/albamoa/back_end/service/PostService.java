package com.albamoa.back_end.service;

import java.time.LocalDateTime;
import java.util.List;

import com.albamoa.back_end.entity.DTO.PostDTO;
import com.albamoa.back_end.entity.Post;

public interface PostService {
    Post getPost(Long id);
    Post savePost(PostDTO postDTO);
    void deletePost(Long id);
    Post updatePost(Long id, PostDTO postDTO);
    // List<Post> getPosts();
    List<Post> getPostsWithViews(LocalDateTime startTime, LocalDateTime endTime);
    //List<Post> getPostsByViewBetween();
}
