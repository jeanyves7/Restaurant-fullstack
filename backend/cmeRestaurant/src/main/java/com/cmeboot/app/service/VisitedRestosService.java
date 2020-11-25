package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;
import com.cmeboot.app.model.VisitedRestaurants;
import com.cmeboot.app.repository.AllRestaurantsRepository;
import com.cmeboot.app.repository.VisitedRestosRepositery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class VisitedRestosService implements IVisitedRestoService {

    //Allrestaurants Repository
    @Autowired
    AllRestaurantsRepository AllRepo;

    // visited restaurant repository
    private final VisitedRestosRepositery visitedRepo;
    public VisitedRestosService(VisitedRestosRepositery visitedRepo){ this.visitedRepo=visitedRepo;}

    @Override
    public List<VisitedRestaurants> findAll() {
        return visitedRepo.findAll();
    }



    //method to return the visited restaurants by type
    @Override
    public List<VisitedRestaurants> findByType(String Type) {
        // first step get all the restaurants by the chosen type
        List<Restaurants> AllType= AllRepo.findByType(Type);
        // secondly get the names of the restaurants that have the chosen type
        ArrayList<String> names=filterName(AllType);

        // after that,  we get all the available restaurants in the visited list
        List<VisitedRestaurants> AllVisited=this.findAll();

        // In the end we filter the  visited restaurants that matches the chosen type
        return AllVisited.stream().filter(visitedRestaurants -> names.contains(visitedRestaurants.getName())).collect(Collectors.toList());
    }

    //method to return a list of filtered restaurants only by name
    //it's private because we don't want to show it to the user
    private ArrayList<String> filterName(List<Restaurants> types){
        ArrayList<String> names=new ArrayList<>();
        for (Restaurants type : types) {
            names.add(type.getName());
        }
        return names;
    }

    //this method is to check if a record already exist in the database
    @Override
    public Boolean CheckRecord(VisitedRestaurants visiRes) {
        long count = visitedRepo.countByIdrestoAndAndVisiteddate(visiRes.getIdresto(),visiRes.getVisiteddate());
        return (count==0);
    }

    //method to add Restaurant to the visited Restaurants Table
    @Override
    public VisitedRestaurants addRestos(VisitedRestaurants visiRes) {
      return visitedRepo.save(visiRes);
    }


}
