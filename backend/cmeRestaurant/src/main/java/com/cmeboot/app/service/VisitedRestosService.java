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
    public VisitedRestaurants addRestos(VisitedRestaurants visiRes) {
        return visitedRepo.save(visiRes);
    }

    @Override
    public List<VisitedRestaurants> orderRestosName(String type) {
        if(type.equalsIgnoreCase("nameasc")){
            return visitedRepo.OrderByNameAsc();
        }
        else{
            return visitedRepo.OrderByNameDesc();
        }
    }
    @Override
    public List<VisitedRestaurants> orderRestosDate(String Type) {
       if(Type.equalsIgnoreCase("dateasc")){
           return visitedRepo.OrderByVisiteddateAsc();
       }
       else{
           return visitedRepo.OrderByVisiteddateDesc();
       }
    }
}
