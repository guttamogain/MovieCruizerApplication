package com.movie.services;

import java.util.Set;

import com.movie.domain.Movie;
import com.movie.exception.MovieAlreadyExistsException;
import com.movie.exception.MovieNotFoundException;


public interface MovieService {

	boolean saveMovie(Movie movie) throws MovieAlreadyExistsException;

	Movie updateMovie(int id,Movie movie) throws MovieNotFoundException;

	boolean deleteMovieById(int id) throws MovieNotFoundException;

	Movie getMovieById(int id) throws MovieNotFoundException;

	Set<Movie> getMyMovies(String userId);
	
	int getIdwithUserIdAndMovieId(String userId, int movieId);

}
