package com.localeats.localeatsbackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.localeats.localeatsbackend.entities.Location;
import com.localeats.localeatsbackend.entities.LocationPreview;
import com.localeats.localeatsbackend.services.LocationServiceImpl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class Controller {
    @Autowired
    LocationServiceImpl locationServiceImpl;

    // @GetMapping("")//Future edit: if number of locations grows to much, conditional rendering of locations within view might be necessary but for now, all will appear
    // public ResponseEntity<List<LocationPreview>> getNameAndCoordinates() {
    //     return ResponseEntity.ok(locationServiceImpl.getAllPreviews());
    // }
    @PostMapping("")
    public ResponseEntity<String> postMethodName(@RequestBody Location loc) {
        //TODO: process POST request
        System.out.println(loc.getCoordinates());
        return ResponseEntity.ok("HI!");
    }
    @GetMapping("")
    public ResponseEntity<String> getMethodName(@RequestBody String str) {
        System.out.println(str);
        return ResponseEntity.ok("returning");
    }
    
    
}
