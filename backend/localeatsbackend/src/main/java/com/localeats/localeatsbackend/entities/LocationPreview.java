package com.localeats.localeatsbackend.entities;

public class LocationPreview {
    private Float latitude;
    private Float longitude;
    private String name;
    private Long id;

    public LocationPreview(Float latitude, Float longitude, String name, Long id) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }
    
}
