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
    last_updated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    open_timestamp TIMESTAMP,
    close_timestamp TIMESTAMP,
    time_zone VARCHAR(4),
    notes TEXT,
    parking_available BOOLEAN,
    latitude DECIMAL(8,6),
    longitude DECIMAL(9,6),
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
    date_contributed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,

    
    CONSTRAINT fk_location
        FOREIGN KEY (location_id) 
        REFERENCES locations(id)
);

CREATE TABLE contact (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    contact_message TEXT,
    contact_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

