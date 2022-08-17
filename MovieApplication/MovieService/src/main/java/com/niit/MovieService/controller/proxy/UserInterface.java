package com.niit.MovieService.controller.proxy;

import com.niit.MovieService.model.MovieUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@FeignClient(name = "user-authentication-service",url = "localhost:8083")
public interface UserInterface {

    //from UserController
    @PostMapping("/api/u2/register")
    public ResponseEntity<String> registerUser(@RequestBody MovieUser movieUser);


}
//user data will be saved in userauthenciation service "whenever new user registers" in movie service.