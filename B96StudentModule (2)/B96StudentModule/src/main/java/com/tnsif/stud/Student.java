package com.tnsif.stud;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Student {

	private String id;
	private String name;
	private String college;
	private String rollno;
	private String qualification;
	private String course;
	private Integer year;
	private String certificate;
	private Integer hallticketno;
	
	public Student() {
		super();
	}

	
	public Student(String id, String name, String college, String rollno, String qualification, String course, Integer year,
			String certificate,Integer hallticketno) {
		super();
		this.id = id;
		this.name = name;
		this.college = college;
		this.rollno = rollno;
		this.qualification = qualification;
		this.course = course;
		this.year = year;
		this.certificate=certificate;
		this.hallticketno = hallticketno;

    }

    @Id
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCollege() {
		return college;
	}


	public void setCollege(String college) {
		this.college = college;
	}


	public String getRollno() {
		return rollno;
	}


	public void setRollno(String rollno) {
		this.rollno = rollno;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public String getCourse() {
		return course;
	}


	public void setCourse(String course) {
		this.course = course;
	}


	public Integer getYear() {
		return year;
	}


	public void setYear(Integer year) {
		this.year = year;
	}
	
	public String getCertificate() {
		return certificate;
	}


	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}


	public Integer getHallticketno() {
		return hallticketno;
	}


	public void setHallticketno(Integer hallticketno) {
		this.hallticketno = hallticketno;
	}


	@Override
	public String toString() {
		return "Student [id=" + id + ", name=" + name + ", college=" + college + ", rollno=" + rollno
				+ ", qualification=" + qualification + ", course=" + course + ", year=" + year + ", certificate="
				+ certificate + ", hallticketno=" + hallticketno + "]";
	}


	
	
	
}

