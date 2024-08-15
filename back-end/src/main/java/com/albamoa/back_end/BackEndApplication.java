package com.albamoa.back_end;

import com.albamoa.back_end.entity.*;
import com.albamoa.back_end.repository.CommentRepository;
import com.albamoa.back_end.repository.PostRepository;
import com.albamoa.back_end.repository.ViewLogRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.albamoa.back_end.entity.User;
// import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.repository.UserRepository;

import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@SpringBootApplication
@AllArgsConstructor
public class BackEndApplication implements CommandLineRunner{

	UserRepository userRepository;
	PostRepository postRepository;
	ViewLogRepository viewLogRepository;
	CommentRepository commentRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception{
		User[] userIds = new User[]{
			new User("cxz2286","cuixianze123")

		};

		for(User u:userIds){
			userRepository.save(u);
		}

		Post post = new Post();
		post.setUser(userIds[0]);
		post.setCategory("카페");
		post.setTitle("Test_Title");
		post.setContent("Test_Contents");
		post.setCreatedAt(LocalDateTime.now());
		post.setUpdatedAt(LocalDateTime.now());

		postRepository.save(post);

		Comment comment = new Comment();
		comment.setPost(post);
		comment.setUser(userIds[0]);
		comment.setContent("Test_comment");
		comment.setCreatedAt(LocalDateTime.now());

		commentRepository.save(comment);

		ViewLog log = new ViewLog();
		log.setPost(post);
		log.setViewedAt(LocalDateTime.now());

		viewLogRepository.save(log);


	}
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}	

}
