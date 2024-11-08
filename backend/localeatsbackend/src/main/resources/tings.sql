--removed categories
CREATE TABLE locations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(100),
    postal_code VARCHAR(15),
    country VARCHAR(100),
    phone_number INT,
    email VARCHAR(255),
    open_timestamp TIMESTAMP,
    close_timestamp TIMESTAMP,
    time_zone VARCHAR(100),  -- Storing as VARCHAR since SQL doesn’t natively support TimeZone
    notes TEXT,
    parking_available BOOLEAN,
    latitude VARCHAR(12),
    longitude VARCHAR(12),
    last_updated DATE
);


CREATE TABLE contributors (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    contributor_name VARCHAR(255),
    contributor_email VARCHAR(255),
    location_id BIGINT,
    
    CONSTRAINT fk_location
        FOREIGN KEY (location_id) 
        REFERENCES locations(id)
);


CREATE TABLE media (
    media_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    website_url VARCHAR(255),
    facebook_url VARCHAR(255),
    instagram_handle VARCHAR(255),
    additional_links VARCHAR(255),
    location_id BIGINT,
    
    CONSTRAINT fk_location_media
        FOREIGN KEY (location_id)
        REFERENCES locations(id)
);
