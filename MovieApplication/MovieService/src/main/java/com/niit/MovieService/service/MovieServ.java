package com.niit.MovieService.service;

import com.niit.MovieService.controller.proxy.UserInterface;
import com.niit.MovieService.exception.MovieNotFoundException;
import com.niit.MovieService.model.Movie;
import com.niit.MovieService.model.MovieUser;
import com.niit.MovieService.repos.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieServ {
@Autowired
MovieRepository movieRepository;

@Autowired
UserInterface userInterface;

    //to register
    public MovieUser saveOrUpdateMovie(MovieUser movieUser )
    {
        userInterface.registerUser(movieUser);
        System.out.println("user registered successfully!");
        return movieRepository.save(movieUser);
    }


    //1.add movie by email--returns String
public String saveDataByEmail(String email,Movie movie) {
MovieUser movieUser = movieRepository.findByEmail(email);
System.out.println(movieUser.getMovieList());
if (movieUser.getMovieList() == null) {
    List<Movie> movies = new ArrayList<>();
    movies.add(movie);
    movieUser.setMovieList(movies);
    movieRepository.save(movieUser);
} else {
    movieUser.getMovieList().add(movie);
    movieRepository.save(movieUser);
}

return "Movie added/updated ";
}

//2.show movies by email--returns MovieUser
public MovieUser getDataByEmail(String email)
{
    return movieRepository.getByEmail(email);
}

//3.To update-- returns String
public String updateByEmail(String email, Movie movie) {
MovieUser movieUser = movieRepository.findByEmail(email);

List<Movie> movies= movieUser.getMovieList();
String msg="MovieId not found,Try again";
int i=0;
for(Movie m : movies){
    if(m.getMovieId()== movie.getMovieId()){
      movies.set(i,movie);
              i++;
        msg="Movie updated";
        break;
    }
    i++;
}movieUser.setMovieList(movies);
movieRepository.save(movieUser);
return msg;
}

//4. To delete by movieId--return a string
public String deleteByMovieId (String email,int movieId)
{
MovieUser movieUser = movieRepository.findByEmail(email);

List<Movie> movies= movieUser.getMovieList();
int i=0;
for(Movie mv:movies){
    if(mv.getMovieId()==movieId){
        break;
    } i++;
}
movieUser.getMovieList().remove(i);
movieRepository.save(movieUser);
return "Movie "+ movieId +" is deleted";
}
}
