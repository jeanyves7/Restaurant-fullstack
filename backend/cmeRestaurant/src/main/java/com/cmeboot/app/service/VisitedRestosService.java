package com.cmeboot.app.service;

import com.cmeboot.app.model.VisitedRestaurants;
import com.cmeboot.app.repository.VisitedRestosRepositery;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitedRestosService implements IVisitedRestoService {

    private final VisitedRestosRepositery visitedRepo;

    public VisitedRestosService(VisitedRestosRepositery visitedRepo){ this.visitedRepo=visitedRepo;}

    @Override
    public List<VisitedRestaurants> findAll() {
        return visitedRepo.findAll();
    }

    @Override
    public List<VisitedRestaurants> findByType(String Type) {
        return visitedRepo.findByName(Type);
    }

    @Override
    public VisitedRestaurants addRestos(VisitedRestaurants visiRes) {
        return visitedRepo.save(visiRes);
    }


}
