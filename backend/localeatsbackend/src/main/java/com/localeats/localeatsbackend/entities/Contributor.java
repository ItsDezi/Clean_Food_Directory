package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.*;

@Entity
@Table(name="contributors")
public class Contributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String contributor_name;
    //@Column(name="contributor_email")
    private String contributor_email;

    @Autowired
    public Contributor(String contributor_name, String contributor_email) {
        this.contributor_name = contributor_name;
        this.contributor_email = contributor_email;
    }
    @ManyToOne()//In the future this should probably be a ManyToMany mapping
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;
    public String getContributorName() {
        return contributor_name;
    }
    public void setContributorName(String contributorName) {
        this.contributor_name = contributorName;
    }
    public String getContributorEmail() {
        return contributor_email;
    }
    public void setContributorEmail(String contributorEmail) {
        this.contributor_email = contributorEmail;
    }
    public Location getLocation() {
        return location;
    }
    public void setLocation(Location location) {
        this.location = location;
    }

}
