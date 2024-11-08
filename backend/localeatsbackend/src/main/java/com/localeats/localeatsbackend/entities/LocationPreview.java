package com.localeats.localeatsbackend.entities;

public class LocationPreview {
    private String latitude;
    private String longitude;
    private String name;
    public LocationPreview(String latitude, String longitude, String name) {
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
