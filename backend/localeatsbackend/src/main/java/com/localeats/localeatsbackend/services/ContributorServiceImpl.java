package com.localeats.localeatsbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.localeats.localeatsbackend.repositories.ContributorRepository;
@Service
public class ContributorServiceImpl implements ContributorService{
    private final ContributorRepository contributorRepository;

    @Autowired
    public ContributorServiceImpl(ContributorRepository contributorRepository) {
        this.contributorRepository = contributorRepository;
    }
    
}
