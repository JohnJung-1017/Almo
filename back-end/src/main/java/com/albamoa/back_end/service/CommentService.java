package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.Comment;
import com.albamoa.back_end.entity.DTO.CommentDTO;

public interface CommentService {
    Comment saveComment(CommentDTO commentDTO);
    Comment getComment(Long id);
    void deleteComment(Long id);
    Comment updateComment(Long id, CommentDTO commentDTO);

}
