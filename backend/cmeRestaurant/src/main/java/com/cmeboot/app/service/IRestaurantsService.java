package com.cmeboot.app.service;

import com.cmeboot.app.model.Restaurants;

import java.util.List;

public interface IRestaurantsService {
    List<Restaurants> findAll();
    List<Restaurants> findType(String type);


}
