package com.albamoa.back_end.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.albamoa.back_end.entity.Post;
// import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.entity.User;


public interface PostRepository extends CrudRepository<Post, Long> {
    List<Post> findByUserId(User userId);
}

