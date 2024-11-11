package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

import org.hibernate.annotations.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.LastModifiedDate;
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
    @Column(columnDefinition = "VARCHAR(12)")
    private String postalcode;
    private String country;
    @Column(name = "phone_number")
    private String phoneNumber;
    private String email;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "location")
    private Media media;
    //private String[] daysOpen;
    private Timestamp openTimestamp;
    private Timestamp closeTimestamp;
    @Column(columnDefinition = "VARCHAR(4)")
    private String timeZone;
    //private String[] paymentMethods;
    //private String[] seasons;
   //private String[] certifications;
    private String notes;
    private boolean parkingAvailable;
    //@Column(name = "coordinates", columnDefinition = "NUMERIC[]")
    //private Double[] coordinates;
    @Column(columnDefinition = "DECIMAL(8,6)")
    private Float latitude;
    @Column(columnDefinition = "DECIMAL(9,6)")
    private Float longitude;
    //private String[] reviews;
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Timestamp lastUpdated;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "location")//should probably change to be @ManytoMany in the future
    private List<Contributor> contributors = new ArrayList<>();
    @Autowired
    public Location(Long id, String name, String description, String address, String city, String state,
            String postalcode, String country, String phoneNumber, String email, Media media, Timestamp openTimestamp,
            Timestamp closeTimestamp, String timeZone, String notes, boolean parkingAvailable, Float latitude,
            Float longitude, Timestamp lastUpdated, List<Contributor> contributors) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
        this.city = city;
        this.state = state;
        this.postalcode = postalcode;
        this.country = country;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.media = media;
        this.openTimestamp = openTimestamp;
        this.closeTimestamp = closeTimestamp;
        this.timeZone = timeZone;
        this.notes = notes;
        this.parkingAvailable = parkingAvailable;
        this.latitude = latitude;
        this.longitude = longitude;
        this.lastUpdated = lastUpdated;
        this.contributors = contributors;
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
        return postalcode;
    }
    public void setPostalCode(String postalCode) {
        this.postalcode = postalCode;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
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
    public String getTimeZone() {
        return timeZone;
    }
    public void setTimeZone(String timeZone) {
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
    public Timestamp getLastUpdated() {
        return lastUpdated;
    }
    public void setLastUpdated(Timestamp lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
    public List<Contributor> getContributors() {
        return contributors;
    }
    public void setContributors(List<Contributor> contributors) {
        this.contributors = contributors;
    }
}
    