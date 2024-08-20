package com.albamoa.back_end.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.albamoa.back_end.entity.Post;
// import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;


public interface PostRepository extends PagingAndSortingRepository<Post, Long> {
    List<Post> findByUserId(User userId);
    List<Post> findAllByOrderByViewsDesc(Pageable pageable);
}

