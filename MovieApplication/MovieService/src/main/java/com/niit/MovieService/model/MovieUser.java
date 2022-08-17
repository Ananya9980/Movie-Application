package com.niit.MovieService.model;

import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;



import java.util.List;

@Document
@ToString
public class MovieUser {

    @Id
    private  String username;
    //Using transient-- movierepos will not save password in the mongo db but store in mysql (using fiegn client)
    @Transient
    private  String password;
    private String email;
    private List<Movie> movieList;

    public MovieUser(){ }
    public MovieUser(String username, String password, String email, List<Movie> movieList)
    {
        this.username = username;
        this.password = password;
        this.email = email;
        this.movieList = movieList;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Movie> getMovieList() {
        return movieList;
    }

    public void setMovieList(List<Movie> movieList) {
        this.movieList = movieList;
    }
}
