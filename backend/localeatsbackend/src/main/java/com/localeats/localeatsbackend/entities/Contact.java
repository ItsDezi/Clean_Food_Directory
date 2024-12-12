package com.localeats.localeatsbackend.entities;

import java.sql.Timestamp;

import jakarta.persistence.Entity;
import jakarta.persistence.*;


@Entity
@Table(name="contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contact_name;
    private String contact_email;
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp contact_date;
    private String contact_message;
    public Contact(String contact_name, String contact_email, Timestamp contact_date) {
        this.contact_name = contact_name;
        this.contact_email = contact_email;
        this.contact_date = contact_date;
    }

    public Contact() {
    }
    public String getContact_message() {
        return contact_message;
    }
    public void setContact_message(String contact_message) {
        this.contact_message = contact_message;
    }
    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Contact [id=" + id + ", contact_name=" + contact_name + ", contact_email=" + contact_email
                + ", contact_date=" + contact_date + "]";
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getContact_name() {
        return contact_name;
    }
    public void setContact_name(String contact_name) {
        this.contact_name = contact_name;
    }
    public String getContact_email() {
        return contact_email;
    }
    public void setContact_email(String contact_email) {
        this.contact_email = contact_email;
    }
    public Timestamp getContact_date() {
        return contact_date;
    }
    public void setContact_date(Timestamp contact_date) {
        this.contact_date = contact_date;
    }
}
