package com.localeats.localeatsbackend.entities;

import jakarta.persistence.Entity;

//@Entity
public class ContributorLocationWrapper {
    private Location location;
    private Contributor contributor;
    
    public ContributorLocationWrapper(Location location, Contributor contributor) {
        this.location = location;
        this.contributor = contributor;
    }
    public Location getLocation() {
        return location;
    }
    public void setLocation(Location location) {
        this.location = location;
    }
    public Contributor getContributor() {
        return contributor;
    }
    public void setContributor(Contributor contributor) {
        this.contributor = contributor;
    }
    
}
