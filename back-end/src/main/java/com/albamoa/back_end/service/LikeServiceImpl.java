package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.DTO.LikeDTO;
import com.albamoa.back_end.entity.Like;
import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.exception.EntityNotFoundException;
import com.albamoa.back_end.repository.LikeRepository;
import com.albamoa.back_end.repository.PostRepository;
import com.albamoa.back_end.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class LikeServiceImpl implements LikeService{

    LikeRepository likeRepository;
    PostRepository postRepository;
    UserRepository userRepository;

    @Override
    public Like likePost(LikeDTO likeDTO) {
        Optional<Post> postOptional = postRepository.findById(likeDTO.getPostId());
        if(!postOptional.isPresent()){
            throw new EntityNotFoundException(likeDTO.getPostId(),Post.class);
        }

        Optional<User> userOptional = userRepository.findByUsername(likeDTO.getUsername());
        if(!userOptional.isPresent()){
            throw new EntityNotFoundException(likeDTO.getUsername(),User.class);
        }

        postOptional.get().incrementLikes();
        postRepository.save(postOptional.get());

        Like like = new Like();
        like.setPost(postOptional.get());
        like.setUser(userOptional.get());
        like.setUpdatedAt(LocalDateTime.now());

        return likeRepository.save(like);
    }

    @Override
    public void unlikePost(LikeDTO likeDTO) {
        Optional<Post> postOptional = postRepository.findById(likeDTO.getPostId());
        if(!postOptional.isPresent()){
            throw new EntityNotFoundException(likeDTO.getPostId(),Post.class);
        }

        Optional<User> userOptional = userRepository.findByUsername(likeDTO.getUsername());
        if(!userOptional.isPresent()){
            throw new EntityNotFoundException(likeDTO.getUsername(),User.class);
        }

        postOptional.get().decrementLikes();
        postRepository.save(postOptional.get());

        Optional<Like> likeOptional = likeRepository.findByPostAndUser(postOptional.get(),userOptional.get());

        likeRepository.delete(likeOptional.get());
        return;

    }
}

//좋아요가 되어있는지를 체크



