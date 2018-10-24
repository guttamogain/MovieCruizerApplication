package com.movie.services;

import java.util.Set;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.domain.Movie;
import com.movie.exception.MovieAlreadyExistsException;
import com.movie.exception.MovieNotFoundException;
import com.movie.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	private final MovieRepository movieRepo;

	@Autowired
	public MovieServiceImpl(MovieRepository movieRepo) {
		super();
		this.movieRepo = movieRepo;
	}

	public boolean saveMovie(Movie movie) throws MovieAlreadyExistsException {
		// movieRepo.findById(movie.getId());
		final Optional<Movie> object =  movieRepo.findById(movie.getId());
		if (object.isPresent()) {
			throw new MovieAlreadyExistsException("Could not save movie , Movie already exists!");
		}
		movieRepo.save(movie);
		return true;
	}

	public Movie updateMovie(int id,Movie updateMovie) throws MovieNotFoundException {
		final Movie movie = movieRepo.findById(id).orElse(null);
		if (movie == null) {
			throw new MovieNotFoundException("Couldn't update movie. Movie not found!");
		}
		movie.setComments(updateMovie.getComments());
		movieRepo.save(movie);
		return movie;

	}

	public boolean deleteMovieById(int id) throws MovieNotFoundException {
		final Movie movie = movieRepo.findById(id).orElse(null);
		if (movie == null) {
			throw new MovieNotFoundException("Could not delete , Movie not found!");
		}
		movieRepo.delete(movie);
		return true;

	}

	public Movie getMovieById(int id) throws MovieNotFoundException {
		final Movie movie = movieRepo.findById(id).get();
		if (movie == null) {
			throw new MovieNotFoundException("Movie not found!");
		}
		return movie;
	}
	
	public int getIdwithUserIdAndMovieId(String userId, int movieId) {
		Set<Movie> moviesInThisUserId = getMyMovies(userId);
		int requiredId = 0;
		for (Movie movie:moviesInThisUserId) {
			if(movie.getMovieId() == movieId) {
				requiredId = movie.getId();
			}
		};
		return requiredId;
	}

	@Override
	public Set<Movie> getMyMovies(String userId) {
		return movieRepo.findByUserId(userId);
		
		
	}

}

