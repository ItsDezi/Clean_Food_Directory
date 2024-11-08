package com.localeats.localeatsbackend.entities;

public class LocationPreview {
    private Number[] coordinates;
    private String name;
    public LocationPreview(Number[] coordinates, String name) {
        this.coordinates = coordinates;
        this.name = name;
    }
    public Number[] getCoordinates() {
        return coordinates;
    }
    public void setCoordinates(Number[] coordinates) {
        this.coordinates = coordinates;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
}
