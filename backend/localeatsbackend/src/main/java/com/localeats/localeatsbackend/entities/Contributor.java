package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name="contributors")
public class Contributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonProperty("contributor_name")
    private String contributor_name;
    //@Column(name="contributor_email")
    @JsonProperty("contributor_email")
    private String contributor_email;
    @Column(name = "date_contributed_on")
    private Timestamp contributed_on;
    @ManyToOne()//In the future this should probably be a ManyToMany mapping
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;
    // @Autowired
    // public Contributor(String contributor_name, String contributor_email, Timestamp contributed_on) {
    //     this.contributor_name = contributor_name;
    //     this.contributor_email = contributor_email;
    //     this.contributed_on = contributed_on;
    // }
    @Autowired
    public Contributor(String contributor_name, String contributor_email) {
        this.contributor_name = contributor_name;
        this.contributor_email = contributor_email;
    }
    public Contributor() {
        
    }
    
    // public Contributor() {
    // }
    //@Autowired
    // public Contributor(String contributor_name, String contributor_email, Timestamp contributed_on, Location location) {
    //     this.contributor_name = contributor_name;
    //     this.contributor_email = contributor_email;
    //     this.contributed_on = contributed_on;
    //     this.location = location;
    // }



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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getContributed_on() {
        return contributed_on;
    }

    public void setContributed_on(Timestamp contributed_on) {
        this.contributed_on = contributed_on;
    }
    @Override
    public String toString() {
        return "Contributor [id=" + id + ", contributor_name=" + contributor_name + ", contributor_email="
                + contributor_email + ", contributed_on=" + contributed_on + ", location=" + location + "]";
    }

}
