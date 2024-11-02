package com.tnsif.stud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	 @Autowired
	    private UserRepository userRepository;
	 // For encoding passwords

	    public void signup(User user) {
	        user.setPassword(user.getPassword()); 
	        user.setUsername(user.getUsername());// Default role
	        userRepository.save(user);
	    }

	    public User findByEmail(String email) {
	        return userRepository.findById(email).orElse(null);
	    }
	    public List<User> findusers() {
	    	return userRepository.findAll();
	    }
}
