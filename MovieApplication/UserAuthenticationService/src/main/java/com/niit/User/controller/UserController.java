package com.niit.User.controller;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import com.niit.User.entity.User;
import com.niit.User.exception.UserNotFoundException;
import com.niit.User.service.JWTSecurityTokenGen;
import com.niit.User.service.UserService;
import org.apache.http.auth.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@EnableEurekaClient

@RequestMapping("/api/u2/")
public class UserController
{

    @Autowired
    UserService userService;

    @Autowired
    JWTSecurityTokenGen jwtSecurityTokenGen;

    @PostMapping("/login")
    @HystrixCommand(fallbackMethod = "fallbackLogin")
    @HystrixProperty(name="execution.isolation.thread.timeoutInMilliseconds",value="50000")
    public ResponseEntity<?> credentialsCheck( @RequestBody User user) throws UserNotFoundException,InvalidCredentialsException
    {
        ResponseEntity responseEntity;

        try{
            User user1=userService.findByemailAndPassword(user.getEmail(), user.getPassword());
            // Thread.sleep(60000);
            if(user1.getEmail().equalsIgnoreCase(user.getEmail()))
            {
                //now create a token
                Map<String,String> tokenMap=jwtSecurityTokenGen.generateToken(user1);
                responseEntity=new ResponseEntity<>(tokenMap,HttpStatus.OK);
            }
            else{
                responseEntity=new ResponseEntity<String>("Invalid user entered",HttpStatus.NETWORK_AUTHENTICATION_REQUIRED);
                System.out.println("inside else ");
            }
        }
        catch (UserNotFoundException ue)
        {
            System.out.println("inside catch block 1");
            throw ue;
        }
        catch (Exception e){
            System.out.println("inside catch block 2");
            responseEntity=new ResponseEntity<>("ERROR OCCURED",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        System.out.println("User controller-login ");
        return responseEntity;

    }

//using this through feign client
    @PostMapping("/register")

    public ResponseEntity<String> registerUser(@RequestBody User user){

        System.out.println("inside user -register");
        User newUser=userService.registerUser(user);
        return new ResponseEntity<String>("User Created", HttpStatus.CREATED);
    }



    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(){
        List<User> users=userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK);
    }
    //Hystrix---
    public ResponseEntity<?> fallbackLogin(@RequestBody User user) throws InvalidCredentialsException {
        String message="Login failed";
        return new ResponseEntity<>(message,HttpStatus.BAD_REQUEST);
    }

}
