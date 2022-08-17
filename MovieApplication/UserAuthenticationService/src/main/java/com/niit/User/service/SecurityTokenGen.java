package com.niit.User.service;

import com.niit.User.entity.User;

import java.util.Map;

public interface SecurityTokenGen {
    Map<String,String> generateToken(User user);
}
