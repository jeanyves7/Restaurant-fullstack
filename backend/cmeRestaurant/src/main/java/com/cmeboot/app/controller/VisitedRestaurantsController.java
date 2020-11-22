package com.cmeboot.app.controller;

import com.cmeboot.app.model.VisitedRestaurants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.cmeboot.app.service.IVisitedRestoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping("/VisitedRestaurants")
@CrossOrigin(origins = "http://localhost:3000")
public class VisitedRestaurantsController {

    private final IVisitedRestoService visoSer;

    public VisitedRestaurantsController(IVisitedRestoService visoSer) { this.visoSer=visoSer;}

    @RequestMapping(method = GET)
    public ResponseEntity<List<VisitedRestaurants>> findAllVisited() {
        try {
            return new ResponseEntity<>(visoSer.findAll(),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.OK);
        }
    }

    @RequestMapping(method = POST)
    public ResponseEntity<VisitedRestaurants> addResto(@RequestBody VisitedRestaurants visoRe){
        try {
            if(visoSer.CheckRecord(visoRe)) {
                return new ResponseEntity<>(visoSer.addRestos(visoRe), HttpStatus.OK);
            }
            else{
                System.out.println("already visited");
                return new ResponseEntity<>(null,HttpStatus.OK);
            }
        }catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{type}")
    public ResponseEntity<List<VisitedRestaurants>> findType(@PathVariable("type") String type){
        try{
            if(type.contentEquals("All")){
                return this.findAllVisited();
            }
            return new ResponseEntity<>(visoSer.findByType(type),HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
