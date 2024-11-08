package com.localeats.localeatsbackend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localeats.localeatsbackend.entities.Location;
import com.localeats.localeatsbackend.entities.LocationPreview;
import com.localeats.localeatsbackend.repositories.LocationRepository;

@Service
public class LocationServiceImpl implements LocationService{
    private final LocationRepository locationRepository;

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository)
    {
        this.locationRepository = locationRepository;
    }

    public List<LocationPreview> getAllPreviews()
    {
        List<LocationPreview> previews = new ArrayList<>();
        for(Location loc : locationRepository.findAll())
        {
            previews.add(new LocationPreview(loc.getCoordinates(), loc.getName()));
        }
        return previews;
    }
}
