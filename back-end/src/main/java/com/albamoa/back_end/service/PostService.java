package com.albamoa.back_end.service;

import java.time.LocalDateTime;
import java.util.List;

import com.albamoa.back_end.entity.DTO.PostDTO;
import com.albamoa.back_end.entity.Post;
import org.springframework.data.domain.Page;

public interface PostService {
    PostDTO getPost(Long id);
    PostDTO savePost(PostDTO postDTO);
    void deletePost(Long id);
    PostDTO updatePost(Long id, PostDTO postDTO);
    Page<PostDTO> getPosts(int page, int size, String sortBy, String sortDirection);
    List<PostDTO> getPostsWithViews(LocalDateTime startTime, LocalDateTime endTime);
    //List<Post> getPostsByViewBetween();
}
