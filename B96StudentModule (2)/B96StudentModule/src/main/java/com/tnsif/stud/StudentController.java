package com.tnsif.stud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	
	//Retrieval
	@GetMapping("/students")
	public List<Student> list(){
		System.out.println("Inside GetMapping");
		return service.listAll();   
	}
	
	//Retrieve By Id
	@GetMapping("/students/{id}")
	public ResponseEntity <?> get(@PathVariable String id){
		try {
			System.out.println("Fecthing Id"+id);
			Student student = service.get(id);

			return new ResponseEntity<Student>(student,HttpStatus.OK);
		} 
		catch (Exception e) {
			return new ResponseEntity<String>("NaN",HttpStatus.NOT_FOUND);
			
		}
		
	}
	//create
	@PostMapping("/students")
	public void add(@RequestBody Student student) {
		System.out.println("Posting"+student);
		service.save(student);
		
	}
	
	//Update
	@PutMapping("/students/{id}")
	public ResponseEntity<?> update(@RequestBody Student student,@PathVariable String id){
		try {
			System.out.println("Fecthing Id"+id+"Put Mapping"+student);
			Student existStudent = service.get(id);
			service.save(student);
			return new ResponseEntity <Student> (student,HttpStatus.OK);
		} 
		catch (Exception e) {
			return new ResponseEntity <> (HttpStatus.NOT_FOUND);
		}
	}
	
	//Delete
	@DeleteMapping("/students/{id}")
	public void delete(@PathVariable String id) {
		System.out.println("Deleting Id"+id);
		service.delete(id);
	}

}
