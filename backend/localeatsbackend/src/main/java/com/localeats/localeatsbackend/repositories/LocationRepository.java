package com.localeats.localeatsbackend.repositories;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import com.localeats.localeatsbackend.entities.*;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>{
    
}
