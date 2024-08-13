package com.albamoa.back_end.web;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.DTO.CommentDTO;
import com.albamoa.back_end.repository.UserRepository;
import com.albamoa.back_end.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/comment")
public class CommentController {

    CommentService commentService;

    @PostMapping
    public ResponseEntity<CommentDTO> saveComment(@RequestBody CommentDTO commentDTO){
        return new ResponseEntity<>(commentService.saveComment(commentDTO), HttpStatus.CREATED);
    }

    @GetMapping("/{postId}/{username}")
    public ResponseEntity<CommentDTO> getComment(@PathVariable Long postId, @PathVariable String username){
        return new ResponseEntity<>(commentService.getCommentbyPostIdAndUsername(postId,username), HttpStatus.OK);
    }
    @DeleteMapping("/{postId}/{username}")
    public ResponseEntity<HttpStatus> deleteComment(@PathVariable Long postId, String username){
        commentService.deleteComment(postId, username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CommentDTO> saveComment(@PathVariable Long id, @RequestBody CommentDTO commentDTO){
        return new ResponseEntity<>(commentService.updateComment(id, commentDTO), HttpStatus.CREATED);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<List<CommentDTO>> getCommentsByPostId(@PathVariable Long postId) {
        return new ResponseEntity<>(commentService.getCommentsByPostId(postId), HttpStatus.OK);
    }
}
