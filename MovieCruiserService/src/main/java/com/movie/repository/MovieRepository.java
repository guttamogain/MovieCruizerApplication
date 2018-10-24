package com.movie.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.domain.Movie;



public interface MovieRepository extends JpaRepository<Movie, Integer> {

	
	Set<Movie> findByUserId(String userId);
}
