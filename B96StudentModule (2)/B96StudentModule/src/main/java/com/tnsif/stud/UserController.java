package com.tnsif.stud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {


    @Autowired
    private UserService userService;
    
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
    	System.out.println("the user data: "+user);
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Email already in use.");
        }
        else {
        userService.signup(user);
        return new ResponseEntity<User>(user,HttpStatus.OK);
        }
    }

    // Login
    @GetMapping("/login")
    public ResponseEntity<User> login(@RequestParam(value="username",required = true) String username) {
        User existingUser = userService.findByEmail(username);
        return ResponseEntity.ok(existingUser);
    }
    @GetMapping
    public ResponseEntity<List<User>> loginDetails() {
    	List<User> existingUser = userService.findusers();
    	return ResponseEntity.ok(existingUser);
    }
}
