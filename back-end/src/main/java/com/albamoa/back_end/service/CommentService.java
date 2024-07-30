package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.DTO.CommentDTO;

public interface CommentService {
    CommentDTO saveComment(CommentDTO commentDTO);
    CommentDTO getCommentbyPostIdAndUsername(Long postId,String username);
    void deleteComment(Long postId, String username);
    CommentDTO updateComment(Long id, CommentDTO commentDTO);

}
