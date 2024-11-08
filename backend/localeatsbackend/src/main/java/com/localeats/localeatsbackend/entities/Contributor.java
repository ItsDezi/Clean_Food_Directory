package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.TimeZone;

import jakarta.persistence.*;

@Entity
@Table(name="contributors")
public class Contributor {
    @Id
    @GeneratedValue
    private Long id;
    private String contributorName;
    //@Column(name="contributor_email")
    private String contributorEmail;

    @ManyToOne()//In the future this should probably be a ManyToMany mapping
    @JoinColumn(name = "location_id", referencedColumnName = "id")
    private Location location;
    public String getContributorName() {
        return contributorName;
    }
    public void setContributorName(String contributorName) {
        this.contributorName = contributorName;
    }
    public String getContributorEmail() {
        return contributorEmail;
    }
    public void setContributorEmail(String contributorEmail) {
        this.contributorEmail = contributorEmail;
    }

}
