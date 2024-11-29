package com.localeats.localeatsbackend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.localeats.localeatsbackend.entities.Contact;
import com.localeats.localeatsbackend.entities.Contributor;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{
    
}