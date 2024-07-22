package com.albamoa.back_end.web;

import com.albamoa.back_end.entity.DTO.PostDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.albamoa.back_end.entity.Post;
import com.albamoa.back_end.service.PostService;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

import java.time.LocalDateTime;
import java.util.List;


@RestController
@RequestMapping("/post")
@AllArgsConstructor
public class PostController {
    
    PostService postService;

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPost(@PathVariable Long id) {
        return new ResponseEntity<>(postService.getPost(id),HttpStatus.OK);
    }

    @GetMapping("/posts/views/{days}")
    public ResponseEntity<List<Post>> getPostsWithViews(@PathVariable Long days){
        LocalDateTime endTime = LocalDateTime.now();
        LocalDateTime startTime = endTime.minusDays(days);
        return new ResponseEntity<>(postService.getPostsWithViews(startTime,endTime),HttpStatus.OK);
    }
    //몇개정도 보낼건지 상의


    @PostMapping
    public ResponseEntity<Post> savePost(@RequestBody PostDTO postDTO) {
        return new ResponseEntity<>(postService.savePost(postDTO),HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody PostDTO postDTO) {
        return new ResponseEntity<>(postService.updatePost(id, postDTO),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePost(@PathVariable Long id){
        postService.deletePost(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

//POSTdto반환
