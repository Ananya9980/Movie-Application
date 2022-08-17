package com.niit.MovieService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND,reason = "Movie with Specified ID is Not Found.Kindly submit Again")
public class MovieNotFoundException extends Exception{
}
