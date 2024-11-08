package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

import jakarta.persistence.*;

@Entity
@Table(name="locations")
public class Location {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private String[] categories;
    private String[] productsAvailable;
    private Number address;
    private String city;
    private String state;
    private Number postalCode;
    private String country;
    private Number phoneNumber;
    private String email;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "location")
    private Media media;
    private String[] daysOpen;
    private Timestamp openTimestamp;
    private Timestamp closeTimestamp;
    private TimeZone timeZone;
    private String[] paymentMethods;
    private String[] seasons;
    private String[] certifications;
    private String notes;
    private boolean parkingAvailable;
    private Number[] coordinates;
    private String[] reviews;
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
    public String[] getCategories() {
        return categories;
    }
    public void setCategories(String[] categories) {
        this.categories = categories;
    }
    public String[] getProductsAvailable() {
        return productsAvailable;
    }
    public void setProductsAvailable(String[] productsAvailable) {
        this.productsAvailable = productsAvailable;
    }
    public Number getAddress() {
        return address;
    }
    public void setAddress(Number address) {
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
    public Number getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(Number postalCode) {
        this.postalCode = postalCode;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public Number getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(Number phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String[] getDaysOpen() {
        return daysOpen;
    }
    public void setDaysOpen(String[] daysOpen) {
        this.daysOpen = daysOpen;
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
    public String[] getPaymentMethods() {
        return paymentMethods;
    }
    public void setPaymentMethods(String[] paymentMethods) {
        this.paymentMethods = paymentMethods;
    }
    public String[] getSeasons() {
        return seasons;
    }
    public void setSeasons(String[] seasons) {
        this.seasons = seasons;
    }
    public String[] getCertifications() {
        return certifications;
    }
    public void setCertifications(String[] certifications) {
        this.certifications = certifications;
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
    public Number[] getCoordinates() {
        return coordinates;
    }
    public void setCoordinates(Number[] coordinates) {
        this.coordinates = coordinates;
    }
    public String[] getReviews() {
        return reviews;
    }
    public void setReviews(String[] reviews) {
        this.reviews = reviews;
    }
    public Date getLastUpdated() {
        return lastUpdated;
    }
    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

}
