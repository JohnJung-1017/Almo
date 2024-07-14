package com.albamoa.back_end.service;

import java.util.List;

import com.albamoa.back_end.entity.Post;

public interface PostService {
    Post getPost(Long id);
    Post savePost(Post post);
    void deletePost(Long id);
    Post updatePost(Long id, Post post);
    // List<Post> getPosts();
}
