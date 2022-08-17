package com.niit.MovieService.controller;

import com.niit.MovieService.exception.MovieNotFoundException;
import com.niit.MovieService.model.Movie;
import com.niit.MovieService.model.MovieUser;
import com.niit.MovieService.service.MovieServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/u1/")
public class MovieController
{
@Autowired
MovieServ movieServ;


//For feign client
@PostMapping("/register")
public MovieUser addUser(@RequestBody MovieUser movieUser) throws Exception {
    MovieUser newUser=movieServ.saveOrUpdateMovie(movieUser);
    return newUser;
}
//CRUD---
//1.Adding movies
@PostMapping("/addmovie/{email}")
public ResponseEntity<?> addmovieDetails(@PathVariable String email,@RequestBody Movie movie)
{
        System.out.println("Add movies !");
        return new ResponseEntity(movieServ.saveDataByEmail(email,movie),HttpStatus.CREATED);
}


//  COPIED THE GENERATE TOKEN FROM @postmapping * /login * and paste it in this @getmapping -> /postman/authorisation/bear token
//2.Show movielist
@GetMapping("user/movies/{email}")

public ResponseEntity<?> getAllUsers(@PathVariable String email){
    MovieUser users=movieServ.getDataByEmail(email);
    System.out.println("showing movielist!");
    return new ResponseEntity<>(users,HttpStatus.OK);
}

//3.Updating the movielist
@PutMapping("user/update/{email}")

public ResponseEntity<String> updatemovie(@PathVariable String email,@RequestBody Movie movie)
{
    ResponseEntity responseEntity;
    System.out.println("updating !");
    return new ResponseEntity( movieServ.updateByEmail(email,movie),HttpStatus.OK);
}

//4.Deleting particular movie from movieList
@DeleteMapping("user/remove/{id}")

public ResponseEntity<?> delete(@PathVariable("id") String email, @RequestParam int movieId)
{
    System.out.println("removing....!");
    return new ResponseEntity<>(movieServ.deleteByMovieId(email,movieId),HttpStatus.OK);
}

}
