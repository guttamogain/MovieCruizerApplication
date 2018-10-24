package com.stackroute.authentication.services;


import com.stackroute.authentication.exceptions.UserAlreadyExistsException;
import com.stackroute.authentication.exceptions.UserNotFoundException;
import com.stackroute.authentication.model.User;

public interface UserService {

	boolean saveUser(User user) throws UserAlreadyExistsException, UserNotFoundException;

	public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException;


}
