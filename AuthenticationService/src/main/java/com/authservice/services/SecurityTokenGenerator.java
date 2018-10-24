package com.authservice.services;

import java.util.Map;

import com.authservice.model.User;

public interface SecurityTokenGenerator {

	Map<String, String> generateToken(User user);
}
