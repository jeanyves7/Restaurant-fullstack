package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;
import com.cmeboot.app.repository.AllRestaurantsRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RestaurantsService implements IRestaurantsService {

    private final AllRestaurantsRepository repository;

    public RestaurantsService(AllRestaurantsRepository repository){
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

    @Override
    public Optional<Restaurants> findId(Long id) {
        return repository.findById(id);
    }


}
