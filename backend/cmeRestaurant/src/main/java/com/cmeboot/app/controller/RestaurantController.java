package com.cmeboot.app.controller;

import com.cmeboot.app.repository.RestaurantsRepository;
import com.cmeboot.app.service.RestaurantsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.cmeboot.app.model.Restaurants;


import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
   public ResponseEntity<List<Restaurants>> findos(){
       return findAllRestaurants("All");
   }

    @GetMapping("/{type}")
    public ResponseEntity<List<Restaurants>> findAllRestaurants(@PathVariable("type") String type){
        try{
            List<Restaurants> restos=new ArrayList<Restaurants>();
            if(type.contentEquals("All") ){
                restos.addAll(restauService.findAll());
            }
            else{
                restos.addAll(restauService.findType(type));
            }
            if(restos.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(restos,HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }



}
