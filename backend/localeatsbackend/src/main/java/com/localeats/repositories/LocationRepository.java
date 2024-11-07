package com.localeats.repositories;

import org.springframework.data.jpa.repository.*;

import com.localeats.entities.*;

public interface LocationRepository extends JpaRepository<Location, Long>{
    
}
