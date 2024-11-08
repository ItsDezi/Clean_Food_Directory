-- CREATE TABLE locations (
--     id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(255),
--     description TEXT,
--     categories JSON,
--     productsAvailable JSON,
--     address NUMERIC,
--     city VARCHAR(255),
--     state VARCHAR(100),
--     postalCode NUMERIC,
--     country VARCHAR(100),
--     phoneNumber NUMERIC,
--     email VARCHAR(255),
--     daysOpen JSON,
--     openTimestamp TIMESTAMP,
--     closeTimestamp TIMESTAMP,
--     timeZone VARCHAR(100),  -- Storing as VARCHAR since SQL doesn’t natively support TimeZone
--     paymentMethods JSON,
--     seasons JSON,
--     certifications JSON,
--     notes TEXT,
--     parkingAvailable BOOLEAN,
--     coordinates JSON,  -- To store latitude and longitude as an array
--     reviews JSON,
--     lastUpdated DATE
-- );


-- CREATE TABLE contributors (
--     id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     contributorName VARCHAR(255),
--     contributorEmail VARCHAR(255),
--     location_id BIGINT,
    
--     CONSTRAINT fk_location
--         FOREIGN KEY (location_id) 
--         REFERENCES locations(id)
-- );


-- CREATE TABLE media (
--     media_id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     websiteURL VARCHAR(255),
--     facebookURL VARCHAR(255),
--     instagramHandle VARCHAR(255),
--     additionalLinks TEXT,
--     location_id BIGINT,
    
--     CONSTRAINT fk_location_media
--         FOREIGN KEY (location_id)
--         REFERENCES locations(id)
-- );
