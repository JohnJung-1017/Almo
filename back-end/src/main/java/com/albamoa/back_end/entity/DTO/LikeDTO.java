package com.albamoa.back_end.entity.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class LikeDTO {
    String username;
    Long postId;
}
