package com.backend.mongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.mongo.person.person;


@Repository
public interface userRepository extends MongoRepository <person,String>{
	

}
