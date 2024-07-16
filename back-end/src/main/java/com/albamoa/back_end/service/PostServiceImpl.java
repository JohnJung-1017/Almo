package com.albamoa.back_end.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import com.albamoa.back_end.entity.DTO.PostDTO;
import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.exception.EntityNotFoundException;
import com.albamoa.back_end.repository.UserRepository;
import org.springframework.stereotype.Service;

import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.repository.PostRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService{


    PostRepository postRepository;
    UserRepository userRepository;

    @Override
    public Post getPost(Long id) {
        return postRepository.findById(id).get();
    }

    @Override
    public Post savePost(PostDTO postDTO) {
        Optional<User> user = userRepository.findByUsername(postDTO.getUsername());

        if (!user.isPresent()) {
            throw new EntityNotFoundException(postDTO.getUsername(),User.class);
        }

        Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setUser(user.get());
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        return postRepository.save(post);

    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public Post updatePost(Long id, PostDTO postDTO) {
        Post p = postRepository.findById(id).get();
        System.out.println(p.getTitle());
        p.setContent(postDTO.getContent());
        p.setTitle(postDTO.getTitle());
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
