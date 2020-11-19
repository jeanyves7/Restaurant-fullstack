package com.cmeboot.app.controller;


import com.cmeboot.app.service.IRestaurantsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.cmeboot.app.model.Restaurants;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Restaurants")
public class RestaurantController {

   final
   IRestaurantsService restauService;

    public RestaurantController(IRestaurantsService restauService) {
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

    @GetMapping("/name/{name}")
    public ResponseEntity<Page<Restaurants>> findNameRestaurants(@PathVariable("name") String name,Pageable pageable){
        try{
                return new ResponseEntity<>(restauService.findName(name,pageable),HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Optional<Restaurants>> findId(@PathVariable Long id){
        return new ResponseEntity<>(restauService.findId(id),HttpStatus.OK);
    }

}
