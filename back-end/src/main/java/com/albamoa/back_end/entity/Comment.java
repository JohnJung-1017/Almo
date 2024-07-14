package com.albamoa.back_end.entity;

import java.time.LocalDateTime;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Table(name = "comment")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post post;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "user", referencedColumnName = "id")
    private User user;

    @NonNull
    @Column(name = "content")
    private String content;

    @NonNull
    @Column(name = "createdAt", updatable = false)
    private LocalDateTime createdAt;

    @NonNull
    @Column(name = "updatedAt")
    private LocalDateTime updatedAt;

    // Getters and setters
}
