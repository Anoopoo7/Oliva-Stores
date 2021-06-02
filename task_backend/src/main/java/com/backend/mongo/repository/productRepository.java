package com.backend.mongo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.backend.mongo.product.products;


@Repository
public interface productRepository extends MongoRepository <products,String> {
	
}
