package com.albamoa.back_end.web;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.DTO.CommentDTO;
import com.albamoa.back_end.repository.UserRepository;
import com.albamoa.back_end.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/comment")
public class CommentController {

    CommentService commentService;

    @PostMapping
    public ResponseEntity<Comment> saveComment(@RequestBody CommentDTO commentDTO){
        return new ResponseEntity<>(commentService.saveComment(commentDTO), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> getComment(@PathVariable Long id){
        return new ResponseEntity<>(commentService.getComment(id), HttpStatus.OK);
    }
    @DeleteMapping
    public ResponseEntity<HttpStatus> deleteComment(@PathVariable Long id){
        commentService.deleteComment(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Comment> saveComment(@PathVariable Long id, @RequestBody CommentDTO commentDTO){
        return new ResponseEntity<>(commentService.updateComment(id, commentDTO), HttpStatus.CREATED);
    }
}
