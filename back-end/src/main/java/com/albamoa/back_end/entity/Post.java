package com.albamoa.back_end.entity;


import java.time.LocalDateTime;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;


@Entity
@Table(name = "post")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NonNull
    @ManyToOne(optional = false)
    @JoinColumn(name = "users", referencedColumnName = "username")
    private User user;

    @NonNull
    @Column(name = "title")
    private String title;

    @NonNull
    @Column(name = "content")
    private String content;

    @Column(name = "createdAt")
    private LocalDateTime createdAt;

    @Column(name = "updatedAt")
    private LocalDateTime updatedAt;


}
