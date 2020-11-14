package com.cmeboot.app.repository;

import com.cmeboot.app.model.Restaurants;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface AllRestaurantsRepository extends PagingAndSortingRepository<Restaurants,Long> {
    Page<Restaurants> findBytypeContaining(String type, Pageable pageable);
    Optional<Restaurants> findById(Long id);
}
