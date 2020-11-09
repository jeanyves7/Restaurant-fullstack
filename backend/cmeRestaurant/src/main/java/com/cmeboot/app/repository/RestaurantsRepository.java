package com.cmeboot.app.repository;

import com.cmeboot.app.model.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantsRepository extends JpaRepository<Restaurants,Long> {
    List<Restaurants> findBytypeContaining(String type);
}
