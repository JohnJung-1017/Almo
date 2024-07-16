package com.albamoa.back_end.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.Post;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findByPost(Post post);
}
