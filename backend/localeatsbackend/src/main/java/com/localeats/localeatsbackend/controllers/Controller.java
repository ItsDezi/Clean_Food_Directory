package com.localeats.localeatsbackend.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.localeats.localeatsbackend.entities.Contributor;
import com.localeats.localeatsbackend.entities.ContributorLocationWrapper;
import com.localeats.localeatsbackend.entities.Location;
import com.localeats.localeatsbackend.entities.LocationPreview;
import com.localeats.localeatsbackend.services.ContributorServiceImpl;
//import com.localeats.localeatsbackend.entities.Media;
import com.localeats.localeatsbackend.services.LocationServiceImpl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class Controller {
    @Autowired
    LocationServiceImpl locationServiceImpl;
    ContributorServiceImpl contributorServiceImpl;
    // @GetMapping("")//Future edit: if number of locations grows to much, conditional rendering of locations within view might be necessary but for now, all will appear
    // public ResponseEntity<List<LocationPreview>> getNameAndCoordinates() {
    //     return ResponseEntity.ok(locationServiceImpl.getAllPreviews());
    // }
    @PostMapping("upload_location")
    public ResponseEntity<String> saveLocation(@RequestBody ContributorLocationWrapper requestObjects) throws Exception {
        //TODO: process POST request
        System.out.println("wooooooowaweewa");
        Location loc = requestObjects.getLocation();
        List<Contributor> tmp = loc.getContributors();
        //System.out.println(requestObjects.getContributor().getContributorEmail());
        Contributor tmpContributor = requestObjects.getContributor();
        tmpContributor.setLocation(loc);
        if (tmp == null)
        {
            tmp = new ArrayList<>();
        }
        tmp.add(tmpContributor);
        loc.setContributors(tmp);
        locationServiceImpl.saveLocation(loc);
        //contributorServiceImpl.save
        return ResponseEntity.ok("Save successful.");
    }
    @GetMapping("")
    public ResponseEntity<List<LocationPreview>> getLocationPreviews() {
        return ResponseEntity.ok(locationServiceImpl.getAllPreviews());
    }
    
    
}
