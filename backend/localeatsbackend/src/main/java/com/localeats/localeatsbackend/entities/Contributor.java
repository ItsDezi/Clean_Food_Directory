package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.TimeZone;

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

}
