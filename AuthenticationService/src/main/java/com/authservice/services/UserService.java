package com.authservice.services;


import com.authservice.exceptions.UserAlreadyExistsException;
import com.authservice.exceptions.UserNotFoundException;
import com.authservice.model.User;

public interface UserService {

	boolean saveUser(User user) throws UserAlreadyExistsException, UserNotFoundException;

	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;


}
