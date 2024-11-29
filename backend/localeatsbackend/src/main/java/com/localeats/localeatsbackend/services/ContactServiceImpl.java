package com.localeats.localeatsbackend.services;

import com.localeats.localeatsbackend.repositories.ContactRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localeats.localeatsbackend.entities.Contact;
@Service
public class ContactServiceImpl implements ContactService{
    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImpl(ContactRepository contactRepository)
    {
        this.contactRepository = contactRepository;
    } 
}
