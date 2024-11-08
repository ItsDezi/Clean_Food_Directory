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
            previews.add(new LocationPreview(loc.getLatitude(), loc.getLongitude(), loc.getName()));
        }
        return previews;
    }
    public void saveLocation(Location location) throws Exception
    {
        if (location.getAddress() == null && (location.getLatitude() == null && location.getLongitude() == null))
        {
            throw new Exception("Coordinates and address are null.");
        }
        // else if(location.getCoordinates().length != 2)
        // {
        //     throw new Exception("Coordniates have invalid amount of entries.");
        // }
        locationRepository.save(location);
    }
}
