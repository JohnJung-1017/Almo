package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.DTO.LikeDTO;
import com.albamoa.back_end.entity.Like;

public interface LikeService {
    Like likePost(LikeDTO likeDTO);
    void unlikePost(LikeDTO likeDTO);


}
