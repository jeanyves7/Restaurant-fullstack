package com.cmeboot.app.service;

import com.cmeboot.app.model.VisitedRestaurants;

import java.util.List;

public interface IVisitedRestoService {

    VisitedRestaurants addRestos(VisitedRestaurants visiRes);

    List<VisitedRestaurants> findAll();
    List<VisitedRestaurants> orderRestosName(String type);
    List<VisitedRestaurants> orderRestosDate(String Type);

}
