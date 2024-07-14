package com.albamoa.back_end;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.entity.User;
// import com.albamoa.back_end.entity.User;
import com.albamoa.back_end.repository.UserRepository;

import lombok.AllArgsConstructor;

@SpringBootApplication
@AllArgsConstructor
public class BackEndApplication implements CommandLineRunner{

	UserRepository userRepository;

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

	}
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}	

}
