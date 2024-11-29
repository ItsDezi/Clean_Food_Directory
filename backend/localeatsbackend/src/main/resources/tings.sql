--removed categories
CREATE TABLE locations (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(100),
    postalcode VARCHAR(12),
    country VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(255),
    open_timestamp TIMESTAMP,
    close_timestamp TIMESTAMP,
    time_zone VARCHAR(4),  -- Storing as VARCHAR since SQL doesn’t natively support TimeZone
    notes TEXT,
    parking_available BOOLEAN,
    latitude DECIMAL(8,6),
    longitude DECIMAL(9,6),
    last_updated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    website_url VARCHAR(255),
    facebook_url VARCHAR(255),
    instagram_handle VARCHAR(255),
    additional_links VARCHAR(255),
    twitter_url VARCHAR(255),
    youtube_url VARCHAR(255),
    tiktok_url VARCHAR(255),
    approved BOOLEAN DEFAULT FALSE
);


CREATE TABLE contributors (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    contributor_name VARCHAR(255),
    contributor_email VARCHAR(255),
    location_id BIGINT,
    date_contributed_on TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,

    
    CONSTRAINT fk_location
        FOREIGN KEY (location_id) 
        REFERENCES locations(id)
);

CREATE TABLE contact (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    contact_date TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,

);
-- CREATE TABLE media (
--     media_id BIGINT PRIMARY KEY AUTO_INCREMENT,
--     website_url VARCHAR(255),
--     facebook_url VARCHAR(255),
--     instagram_handle VARCHAR(255),
--     additional_links VARCHAR(255),
--     location_id BIGINT,
    
--     CONSTRAINT fk_location_media
--         FOREIGN KEY (location_id)
--         REFERENCES locations(id)
-- );
