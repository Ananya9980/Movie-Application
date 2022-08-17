package com.niit.MovieService.repos;


import com.niit.MovieService.model.Movie;
import com.niit.MovieService.model.MovieUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<MovieUser,String>
    //MongoRepository provides all the necessary methods which help to create
        // a CRUD application and it also supports the custom derived query methods
{
    MovieUser findByEmail(String email);   //to add data

    List<MovieUser> findByUsername(String username);

    MovieUser getByEmail(String email);   //to show data


}
