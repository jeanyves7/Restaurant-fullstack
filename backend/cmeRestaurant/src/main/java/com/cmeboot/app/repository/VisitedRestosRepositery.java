package com.cmeboot.app.repository;

import com.cmeboot.app.model.VisitedRestaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VisitedRestosRepositery extends JpaRepository<VisitedRestaurants,Long> {

    List<VisitedRestaurants>  OrderByNameAsc();
    List<VisitedRestaurants>  OrderByNameDesc();

    List<VisitedRestaurants>  OrderByVisiteddateDesc();
    List<VisitedRestaurants>  OrderByVisiteddateAsc();
}
