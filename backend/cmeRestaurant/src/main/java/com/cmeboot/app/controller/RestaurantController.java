package com.cmeboot.app.controller;


import com.cmeboot.app.service.RestaurantsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.cmeboot.app.model.Restaurants;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Restaurants")
public class RestaurantController {

   final
   RestaurantsService restauService;

    public RestaurantController(RestaurantsService restauService) {
        this.restauService = restauService;
    }

   @GetMapping
   public ResponseEntity<Page<Restaurants>> findRestos(Pageable pageable){
       return findAllRestaurants("All",pageable);
   }

    @GetMapping("/{type}")
    public ResponseEntity<Page<Restaurants>> findAllRestaurants(@PathVariable("type") String type,Pageable pageable){
        try{
            if(type.contentEquals("All") ){
                return new ResponseEntity<>(restauService.findAll(pageable),HttpStatus.OK);
            }
            else{
               return new ResponseEntity<>(restauService.findType(type,pageable),HttpStatus.OK);
            }
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
