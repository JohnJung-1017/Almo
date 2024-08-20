package com.albamoa.back_end.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.albamoa.back_end.entity.DTO.PostDTO;
import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.entity.ViewLog;
import com.albamoa.back_end.exception.EntityNotFoundException;
import com.albamoa.back_end.repository.UserRepository;
import com.albamoa.back_end.repository.ViewLogRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    private static final Set<String> VALID_SORT_FIELDS = Set.of("views", "likes", "createdAt");


    @Override
    public PostDTO getPost(Long id) {
        Optional<Post> postOptional = postRepository.findById(id);
        incrementViews(id);
        if (!postOptional.isPresent()) {
            throw new EntityNotFoundException(id,Post.class);
        }

        Post p = postOptional.get();
        PostDTO postDTO = new PostDTO();
        postDTO.setId(p.getId());
        postDTO.setTitle(p.getTitle());
        postDTO.setContent(p.getContent());
        postDTO.setUsername(p.getUser().getUsername());
        postDTO.setCategory(p.getCategory());
        postDTO.setViews(p.getViews());
        postDTO.setLikes(p.getLikes());

        return postDTO;
    }

    @Override
    public List<PostDTO> getPostsWithViews(LocalDateTime startTime, LocalDateTime endTime) {

        Pageable pageable = PageRequest.of(0,5);
        List<Post> posts = postRepository.findAllByOrderByViewsDesc(pageable);
        System.out.println(posts);
        return posts.stream()
                .map(post -> {
                    PostDTO postDTO = new PostDTO();
                    postDTO.setId(post.getId());
                    postDTO.setTitle(post.getTitle());
                    postDTO.setContent(post.getContent());
                    postDTO.setUsername(post.getUser().getUsername());
                    postDTO.setCategory(post.getCategory());
                    postDTO.setViews(post.getViews());
                    postDTO.setLikes(post.getLikes());
                    return postDTO;
                })
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
    public PostDTO savePost(PostDTO postDTO) {
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

        postRepository.save(post);

        PostDTO postDTO_Res = new PostDTO();
        postDTO_Res.setId(post.getId());
        postDTO_Res.setTitle(post.getTitle());
        postDTO_Res.setContent(post.getContent());
        postDTO_Res.setUsername(post.getUser().getUsername());
        postDTO_Res.setCategory(post.getCategory());
        postDTO_Res.setViews(post.getViews());
        postDTO_Res.setLikes(post.getLikes());

        return postDTO_Res;

    }

    @Override
    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    @Override
    public PostDTO updatePost(Long id, PostDTO postDTO) {
        Post p = postRepository.findById(id).get();
        System.out.println(p.getTitle());
        p.setContent(postDTO.getContent());
        p.setTitle(postDTO.getTitle());
        p.setUpdatedAt(LocalDateTime.now());
        postRepository.save(p);

        PostDTO postDTO_Res = new PostDTO();
        postDTO_Res.setTitle(p.getTitle());
        postDTO_Res.setContent(p.getContent());
        postDTO_Res.setUsername(p.getUser().getUsername());
        postDTO_Res.setCategory(p.getCategory());

        return postDTO_Res;
    }


    @Override
    public Page<PostDTO> getPosts(int page, int size, String sortBy, String sortDirection) {
        if (!VALID_SORT_FIELDS.contains(sortBy)) {
            throw new IllegalArgumentException("Invalid sort field: " + sortBy);
        }

        Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Post> posts = postRepository.findAll(pageable);

        return posts.map(post -> {
            PostDTO postDTO = new PostDTO();
            postDTO.setId(post.getId());
            postDTO.setTitle(post.getTitle());
            postDTO.setContent(post.getContent());
            postDTO.setUsername(post.getUser().getUsername());
            postDTO.setCategory(post.getCategory());
            postDTO.setViews(post.getViews());
            postDTO.setLikes(post.getLikes());
            postDTO.setCreateAt(post.getCreatedAt());
            return postDTO;
        });
    }
}
