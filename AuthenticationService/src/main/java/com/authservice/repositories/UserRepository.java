package com.authservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.authservice.model.User;

public interface UserRepository extends JpaRepository<User, String> {


	User findByUserIdAndPassword(String userId, String password);
}
