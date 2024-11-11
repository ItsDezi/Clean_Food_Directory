package com.localeats.localeatsbackend.entities;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.TimeZone;

import jakarta.persistence.*;

// @Entity
// @Table(name="media")
// public class Media {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long media_id;
//     @Column(name="website_url")
//     private String websiteURL;
//     @Column(name="facebook_url")
//     private String facebookURL;
//     private String instagramHandle;
//     private String additionalLinks;
//     @OneToOne(cascade = CascadeType.ALL)
//     @JoinColumn(name = "location_id", referencedColumnName = "id")
//     private Location location;
//     public Long getId() {
//         return media_id;
//     }
//     public void setId(Long id) {
//         this.media_id = id;
//     }
//     public String getWebsiteURL() {
//         return websiteURL;
//     }
//     public void setWebsiteURL(String websiteURL) {
//         this.websiteURL = websiteURL;
//     }
//     public String getFacebookURL() {
//         return facebookURL;
//     }
//     public void setFacebookURL(String facebookURL) {
//         this.facebookURL = facebookURL;
//     }
//     public String getInstagramHandle() {
//         return instagramHandle;
//     }
//     public void setInstagramHandle(String instagramHandle) {
//         this.instagramHandle = instagramHandle;
//     }
//     public String getAdditionalLinks() {
//         return additionalLinks;
//     }
//     public void setAdditionalLinks(String additionalLinks) {
//         this.additionalLinks = additionalLinks;
//     }

// }
