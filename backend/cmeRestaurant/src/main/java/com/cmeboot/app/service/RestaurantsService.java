package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;
import com.cmeboot.app.repository.RestaurantsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantsService implements IRestaurantsService {

    private final RestaurantsRepository repository;

    public RestaurantsService(RestaurantsRepository repository){
        this.repository=repository;
    }


    @Override
    public List<Restaurants> findAll() {

        var cities = (List<Restaurants>) repository.findAll();

        return cities;
    }

    @Override
    public List<Restaurants> findType(String type) {
        return repository.findBytypeContaining(type);
    }


}
