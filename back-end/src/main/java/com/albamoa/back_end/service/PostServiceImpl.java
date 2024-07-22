package com.albamoa.back_end.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import com.albamoa.back_end.entity.DTO.PostDTO;
import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.entity.ViewLog;
import com.albamoa.back_end.exception.EntityNotFoundException;
import com.albamoa.back_end.repository.UserRepository;
import com.albamoa.back_end.repository.ViewLogRepository;
import org.springframework.stereotype.Service;

import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.repository.PostRepository;

import lombok.AllArgsConstructor;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService{


    PostRepository postRepository;
    UserRepository userRepository;
    ViewLogRepository viewLogRepository;

    @Override
    public Post getPost(Long id) {
        Optional<Post> postOptional = postRepository.findById(id);
        incrementViews(id);
        if (!postOptional.isPresent()) {
            throw new EntityNotFoundException(id,Post.class);
        }

//        ViewLog viewLog = new ViewLog();
//        viewLog.setPost(postOptional.get());
//        viewLog.setViewAt(LocalDateTime.now());
//        viewLogRepository.save(viewLog);
        return postOptional.get();
    }

    @Override
    public List<Post> getPostsWithViews(LocalDateTime startTime, LocalDateTime endTime) {
        List<ViewLog> logs = viewLogRepository.findByViewedAtBetween(startTime,endTime);

        Map<Post, Long> postViewCounts = logs.stream()
                .collect(Collectors.groupingBy(ViewLog::getPost,Collectors.counting()));

        return postViewCounts.entrySet().stream()
                .sorted(Map.Entry.<Post, Long>comparingByValue().reversed())
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }

    @Transactional
    public void incrementViews(Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        postOptional.get().incrementViews();
        postRepository.save(postOptional.get());

        ViewLog viewLog = new ViewLog();
        viewLog.setPost(postOptional.get());
        viewLog.setViewedAt(LocalDateTime.now());
        viewLogRepository.save(viewLog);
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
        post.setCategory(postDTO.getCategory());
        post.setCategory(postDTO.getCategory());
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
