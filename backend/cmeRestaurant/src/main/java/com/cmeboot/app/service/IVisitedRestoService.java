package com.cmeboot.app.service;

import com.cmeboot.app.model.VisitedRestaurants;

import java.util.List;

public interface IVisitedRestoService {
    List<VisitedRestaurants> findAll();

    VisitedRestaurants addRestos(VisitedRestaurants visiRes);
    List<VisitedRestaurants> orderRestosName();
    List<VisitedRestaurants> orderRestosDate(String Type);

}
