package com.albamoa.back_end.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import com.albamoa.back_end.security.filter.AuthenticationFilter;
import com.albamoa.back_end.security.filter.JWTAuthorizationFilter;
import com.albamoa.back_end.security.manager.CustomAuthenticationManager;

import lombok.AllArgsConstructor;

// @Configuration
// @AllArgsConstructor
// public class SecurityConfig {
//     private final CustomAuthenticationManager customAuthenticationManager;

//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//         AuthenticationFilter authenticationFilter = new AuthenticationFilter(customAuthenticationManager);
//         authenticationFilter.setFilterProcessesUrl("/authenticate");

//         http
//             .headers(headers -> headers.frameOptions().disable())
//             .csrf(csrf -> csrf.disable())
//             .authorizeHttpRequests(authorize -> authorize
//                 .requestMatchers("/user/register").permitAll()
//                 .requestMatchers("/h2/**").permitAll()
//                 .anyRequest().authenticated())
//             .addFilter(authenticationFilter)
//             .addFilterAfter(new JWTAuthorizationFilter(), AuthenticationFilter.class)
//             .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//             .httpBasic(httpSecurityHttpBasicConfigurer -> httpSecurityHttpBasicConfigurer.disable())
//             .formLogin(formLoginConfigurer -> formLoginConfigurer.disable());

//         return http.build();
//     }
        
// }

@Configuration
@AllArgsConstructor
public class SecurityConfig {

    private final CustomAuthenticationManager customAuthenticationManager;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(customAuthenticationManager);
        authenticationFilter.setFilterProcessesUrl("/authenticate");
        http        
            .headers().frameOptions().disable() // New Line: the h2 console runs on a "frame". By default, Spring Security prevents rendering within an iframe. This line disables its prevention.
            .and()
            .csrf().disable().cors().and()
            .authorizeRequests()  
                .antMatchers("/h2/**").permitAll() // New Line: allows us to access the h2 console without the need to authenticate. ' ** '  instead of ' * ' because multiple path levels will follow /h2.
                .antMatchers(HttpMethod.POST, SecurityConstants.REGISTER_PATH).permitAll()
                .antMatchers(HttpMethod.GET, "/post/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilter(authenticationFilter)
                .addFilterAfter(new JWTAuthorizationFilter(), AuthenticationFilter.class)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        return http.build();
    }

    
}