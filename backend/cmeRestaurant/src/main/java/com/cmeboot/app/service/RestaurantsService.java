package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;
import com.cmeboot.app.repository.AllRestaurantsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RestaurantsService implements IRestaurantsService {

    //autowiring the AllRestaurants Repository
    private final AllRestaurantsRepository repository;
    public RestaurantsService(AllRestaurantsRepository repository){
        this.repository=repository;
    }

    //method that return the paginated result by default
    @Override
    public Page<Restaurants> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    //method that return the paginated result by type
    @Override
    public Page<Restaurants> findType(String type, Pageable pageable) {
        return repository.findBytypeContaining(type,pageable);
    }

    //methode that return the paginated resulted result by name
    // it's a collection because we may have more than one restaurant that shares the same name but are in different location
    @Override
    public Page<Restaurants> findName(String name, Pageable pageable) {
        return repository.findByNameStartingWithIgnoreCase(name,pageable);
    }

    //method to return the restaurant by its id
    @Override
    public Optional<Restaurants> findId(Long id) {
        return repository.findById(id);
    }

}
