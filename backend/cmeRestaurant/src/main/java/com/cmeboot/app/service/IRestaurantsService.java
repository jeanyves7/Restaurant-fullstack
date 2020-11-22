package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

//this interface shows the methods that are available to the Restaurants service

public interface IRestaurantsService {

    Page<Restaurants> findAll(Pageable pageable);
    Page<Restaurants> findType(String type,Pageable pageable);
    Page<Restaurants> findName(String name,Pageable pageable);

    Optional<Restaurants> findId(Long id) ;
}
