package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;
import com.cmeboot.app.repository.RestaurantsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;



@Service
public class RestaurantsService implements IRestaurantsService {

    private final RestaurantsRepository repository;

    public RestaurantsService(RestaurantsRepository repository){
        this.repository=repository;
    }


    @Override
    public Page<Restaurants> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Page<Restaurants> findType(String type, Pageable pageable) {
        return repository.findBytypeContaining(type,pageable);
    }


}
