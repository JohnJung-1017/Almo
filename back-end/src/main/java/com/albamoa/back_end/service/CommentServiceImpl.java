package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.DTO.CommentDTO;
import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.exception.EntityNotFoundException;
import com.albamoa.back_end.repository.CommentRepository;
import com.albamoa.back_end.repository.PostRepository;
import com.albamoa.back_end.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@AllArgsConstructor
@Service
public class CommentServiceImpl implements CommentService{

    UserRepository userRepository;
    CommentRepository commentRepository;
    PostRepository postRepository;

    @Override
    public CommentDTO getCommentbyPostIdAndUsername(Long postId, String username) {
        Optional<Post> postOptional = postRepository.findById(postId);
        if(!postOptional.isPresent()){
            throw new EntityNotFoundException(postId,Post.class);
        }

        Optional<User> userOptional = userRepository.findByUsername(username);
        if(!userOptional.isPresent()){
            throw new EntityNotFoundException(username,User.class);
        }
        Optional<Comment> commentOptional = commentRepository.findByPostAndUser(postOptional.get(), userOptional.get());

        if(!commentOptional.isPresent()){
            throw new EntityNotFoundException(postId,Comment.class);
        }
        Comment comment = commentOptional.get();
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setContent(comment.getContent());
        commentDTO.setUsername(comment.getUser().getUsername());
        commentDTO.setPostId(comment.getPost().getId());
        return commentDTO;
    }

    @Override
    public CommentDTO saveComment(CommentDTO commentDTO) {
        Optional<User> userOptional = userRepository.findByUsername(commentDTO.getUsername());
        if(!userOptional.isPresent()){
            throw new EntityNotFoundException(commentDTO.getUsername(),User.class);
        }

        Optional<Post> postOptional = postRepository.findById(commentDTO.getPostId());
        if(!postOptional.isPresent()){
            throw new EntityNotFoundException(commentDTO.getPostId(),Post.class);
        }

        Comment comment = new Comment();
        comment.setUser(userOptional.get());
        comment.setPost(postOptional.get());
        comment.setCreatedAt(LocalDateTime.now());
        comment.setUpdatedAt(LocalDateTime.now());
        comment.setContent(commentDTO.getContent());
        commentRepository.save(comment);
        return commentDTO;
    }

    @Override
    public void deleteComment(Long postId, String username) {
        Optional<Post> postOptional = postRepository.findById(postId);
        if(!postOptional.isPresent()){
            throw new EntityNotFoundException(postId,Post.class);
        }

        Optional<User> userOptional = userRepository.findByUsername(username);
        if(!userOptional.isPresent()){
            throw new EntityNotFoundException(username,User.class);
        }
        Optional<Comment> commentOptional = commentRepository.findByPostAndUser(postOptional.get(), userOptional.get());
        if(!commentOptional.isPresent()) {
            throw new EntityNotFoundException(postId, Comment.class);
        }

        commentRepository.delete(commentOptional.get());
    }

    @Override
    public CommentDTO updateComment(Long id, CommentDTO commentDTO) {
        Optional<Comment> commentOptional = commentRepository.findById(id);
        if(!commentOptional.isPresent()){
            throw new EntityNotFoundException(id,Comment.class);
        }

        Optional<User> userOptional = userRepository.findByUsername(commentDTO.getUsername());
        if(!userOptional.isPresent()){
            throw new EntityNotFoundException(commentDTO.getUsername(),User.class);
        }

        Optional<Post> postOptional = postRepository.findById(commentDTO.getPostId());
        if(!postOptional.isPresent()){
            throw new EntityNotFoundException(commentDTO.getPostId(),Post.class);
        }
        Comment comment = commentOptional.get();
        comment.setUpdatedAt(LocalDateTime.now());
        comment.setContent(commentDTO.getContent());
        commentRepository.save(comment);
        return commentDTO;
    }
}
