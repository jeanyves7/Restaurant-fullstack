package com.cmeboot.app.repository;

import com.cmeboot.app.model.VisitedRestaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Date;



@Repository
public interface VisitedRestosRepositery extends JpaRepository<VisitedRestaurants,Long> {
    //get the filtered data by type
    Long countByIdrestoAndAndVisiteddate(Integer id, Date visited);
}
