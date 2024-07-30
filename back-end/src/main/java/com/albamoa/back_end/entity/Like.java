package com.albamoa.back_end.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "likes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post post;

    @NonNull
    @ManyToOne
    @JoinColumn(name = "users", referencedColumnName = "username")
    private User user;

    @NonNull
    @Column(name = "updatedAt")
    private LocalDateTime updatedAt;

}
