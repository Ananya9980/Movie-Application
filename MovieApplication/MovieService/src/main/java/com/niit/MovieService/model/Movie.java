package com.niit.MovieService.model;
import lombok.*;
import javax.persistence.Id;


    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @ToString

  //If i don't want a Document then all movie document will be embedded document.
    public class Movie {
        @Id
        int movieId;
        String movieName;
        String genre;
        String rating;
    }

