package com.albamoa.back_end.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "views")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ViewLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "post_id",referencedColumnName = "id")
    private Post post;

    @NonNull
    @Column(name = "viewedAt")
    LocalDateTime viewedAt;
}
