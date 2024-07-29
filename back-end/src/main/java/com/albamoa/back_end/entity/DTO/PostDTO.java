package com.albamoa.back_end.entity.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public  class PostDTO {

    private String username;
    private String title;
    private String content;
    private String category;
    private Long views;
    private Long likes;


}
