package com.localeats.localeatsbackend.services;

import com.localeats.localeatsbackend.repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localeats.localeatsbackend.entities.Contact;
@Service
public class ContactServiceImpl implements ContactService{
    private final ContactRepository contactRepository;

    // @Autowired
    public ContactServiceImpl(ContactRepository contactRepository)
    {
        this.contactRepository = contactRepository;
    }

    public void saveContact(Contact contact) throws Exception
    {
        if (contact.getContact_name() == null || contact.getContact_name().isBlank() || contact.getContact_name().isEmpty())
        {
            throw new Exception("invalid name");
        }
        else if (contact.getContact_email() == null || contact.getContact_email().isBlank() || contact.getContact_email().isEmpty())
        {
            throw new Exception("invalid email");
        }
        else
        {
            contactRepository.save(contact);
        }
    }
}
