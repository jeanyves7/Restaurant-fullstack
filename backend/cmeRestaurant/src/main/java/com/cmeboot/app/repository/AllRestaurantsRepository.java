package com.cmeboot.app.repository;

import com.cmeboot.app.model.Restaurants;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface AllRestaurantsRepository extends PagingAndSortingRepository<Restaurants,Long> {
    // methods that returns the paginated result based on the type of the request
    Page<Restaurants> findBytypeContaining(String type, Pageable pageable);
    Page<Restaurants> findByNameIgnoreCase(String name,Pageable pageable);

    // methods to filter the restaurants bu types
    List<Restaurants> findByType(String Type);

    //methods to get the restaurant by id
    Optional<Restaurants> findById(Long id);
}
