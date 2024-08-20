package com.albamoa.back_end.entity.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public  class PostDTO {
    private Long Id;
    private String username;
    private String title;
    private String content;
    private String category;
    private Long views;
    private Long likes;
    private LocalDateTime createAt;


}
