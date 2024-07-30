package com.albamoa.back_end.repository;

import com.albamoa.back_end.entity.Like;
import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface LikeRepository extends CrudRepository<Like, Long> {
    Optional<Like> findByPostAndUser(Post post, User user);
}
