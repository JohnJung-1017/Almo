package com.albamoa.back_end.service;

import com.albamoa.back_end.entity.User;

public interface UserService {
    User getUser(Long id);
    User getUser(String username);
    User saveUser(User user);
}
