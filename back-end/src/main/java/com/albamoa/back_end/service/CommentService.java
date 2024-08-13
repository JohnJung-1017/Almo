package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.DTO.CommentDTO;

import java.util.List;

public interface CommentService {
    CommentDTO saveComment(CommentDTO commentDTO);
    CommentDTO getCommentbyPostIdAndUsername(Long postId,String username);
    void deleteComment(Long postId, String username);
    CommentDTO updateComment(Long id, CommentDTO commentDTO);
    List<CommentDTO> getCommentsByPostId(Long postId);
}
