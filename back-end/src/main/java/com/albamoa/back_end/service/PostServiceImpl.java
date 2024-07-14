package com.albamoa.back_end.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.repository.PostRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService{


    PostRepository postRepository;

    @Override
    public Post getPost(Long id) {
        return postRepository.findById(id).get();
    }

    @Override
    public Post savePost(Post post) {
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        return postRepository.save(post);
    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public Post updatePost(Long id, Post post) {
        Post p = postRepository.findById(id).get();
        System.out.println(p.getTitle());
        p.setContent(post.getContent());
        p.setTitle(post.getTitle());
        p.setUpdatedAt(LocalDateTime.now());
        postRepository.save(p);
        return p;
    }

    // @Override
    // public List<Post> getPosts() {
    //     // TODO Auto-generated method stub
    //     return null;
    // }
}
