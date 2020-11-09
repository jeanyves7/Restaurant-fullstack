package com.cmeboot.app.controller;


import com.cmeboot.app.model.Restaurants;
import com.cmeboot.app.model.VisitedRestaurants;
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
    public List<VisitedRestaurants> findAllVisited(){
        List<VisitedRestaurants> restaus=visoSer.findAll();
        return restaus;
    }

    @RequestMapping(method = POST)
    public VisitedRestaurants addResto(@RequestBody VisitedRestaurants visoRe){
        return visoSer.addRestos(visoRe);
    }

    @RequestMapping(value = "/Sort/{Type}",method = GET)
    public List<VisitedRestaurants> findOrder(@PathVariable("Type") String type){
        if(type.equalsIgnoreCase("name")){
            return visoSer.orderRestosName();
        }
        else {
            return visoSer.orderRestosDate(type);
        }
    }

}
