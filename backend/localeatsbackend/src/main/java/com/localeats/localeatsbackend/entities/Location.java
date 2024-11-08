package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.DialectOverride.ColumnDefault;

import jakarta.persistence.*;

@Entity
@Table(name="locations")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    //@Column(columnDefinition = "VARBINARY")
    //private List<String> categories;
    //private String[] products_available;
    private String address;
    private String city;
    private String state;
    private String postalCode;
    private String country;
    private Integer phoneNumber;
    private String email;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "location")
    private Media media;
    //private String[] daysOpen;
    private Timestamp openTimestamp;
    private Timestamp closeTimestamp;
    private TimeZone timeZone;
    //private String[] paymentMethods;
    //private String[] seasons;
   //private String[] certifications;
    private String notes;
    private boolean parkingAvailable;
    //@Column(name = "coordinates", columnDefinition = "NUMERIC[]")
    //private Double[] coordinates;
    @Column(columnDefinition = "VARCHAR(12)")
    private String latitude;
    @Column(columnDefinition = "VARCHAR(12)")
    private String longitude;
    //private String[] reviews;
    private Date lastUpdated;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "location")//should probably change to be @ManytoMany in the future
    private List<Contributor> contributors = new ArrayList<>();
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public Integer getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Media getMedia() {
        return media;
    }
    public void setMedia(Media media) {
        this.media = media;
    }
    public Timestamp getOpenTimestamp() {
        return openTimestamp;
    }
    public void setOpenTimestamp(Timestamp openTimestamp) {
        this.openTimestamp = openTimestamp;
    }
    public Timestamp getCloseTimestamp() {
        return closeTimestamp;
    }
    public void setCloseTimestamp(Timestamp closeTimestamp) {
        this.closeTimestamp = closeTimestamp;
    }
    public TimeZone getTimeZone() {
        return timeZone;
    }
    public void setTimeZone(TimeZone timeZone) {
        this.timeZone = timeZone;
    }
    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    public boolean isParkingAvailable() {
        return parkingAvailable;
    }
    public void setParkingAvailable(boolean parkingAvailable) {
        this.parkingAvailable = parkingAvailable;
    }
    public String getLatitude() {
        return latitude;
    }
    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
    public String getLongitude() {
        return longitude;
    }
    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
    public Date getLastUpdated() {
        return lastUpdated;
    }
    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
    public List<Contributor> getContributors() {
        return contributors;
    }
    public void setContributors(List<Contributor> contributors) {
        this.contributors = contributors;
    }
}
    