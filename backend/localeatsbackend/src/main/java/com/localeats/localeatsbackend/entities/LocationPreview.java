package com.localeats.localeatsbackend.entities;

public class LocationPreview {
    private Float latitude;
    private Float longitude;
    private String name;
    public LocationPreview(Float latitude, Float longitude, String name) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    
}
