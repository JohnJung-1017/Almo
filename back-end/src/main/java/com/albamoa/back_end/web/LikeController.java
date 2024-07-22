package com.albamoa.back_end.web;

import com.albamoa.back_end.entity.DTO.LikeDTO;
import com.albamoa.back_end.entity.Like;
import com.albamoa.back_end.service.LikeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/likes")
public class LikeController {

    LikeService likeService;

    @PostMapping("/like")
    public ResponseEntity<Like> likePost(@RequestBody LikeDTO likeDTO){
        return new ResponseEntity<>(likeService.likePost(likeDTO),HttpStatus.OK);
    }

    @PostMapping("/unlike")
    public ResponseEntity<HttpStatus> unlikePost(@RequestBody  LikeDTO likeDTO){
        likeService.unlikePost(likeDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
