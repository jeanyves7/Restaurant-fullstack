package com.cmeboot.app.service;

import com.cmeboot.app.model.VisitedRestaurants;

import java.util.List;

//this interface shows the methods that are available to the Visited Restaurants service

public interface IVisitedRestoService {

    VisitedRestaurants addRestos(VisitedRestaurants visiRes);
    List<VisitedRestaurants> findAll();

    List<VisitedRestaurants> findByType(String Type);

    Boolean CheckRecord(VisitedRestaurants visiRes);
}
