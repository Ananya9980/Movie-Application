package com.niit.User.service;

import com.niit.User.entity.User;
import com.niit.User.exception.UserNotFoundException;
import com.niit.User.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user)
    {
        return userRepository.save(user);
    }

    public User findByemailAndPassword(String email,String password) throws UserNotFoundException
    {
        User user=userRepository.findByemailAndPassword(email,password) ;
                if(user==null)
                {
                    throw new UserNotFoundException();

                }
                return user;
    }

    public List<User> getAllUsers()
    {
        return userRepository.findAll();
    }
}
