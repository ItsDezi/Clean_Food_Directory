/* eslint-disable react/react-in-jsx-scope */
import { FormControl, Tab, Tabs, Form, Row, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect, useState, useContext } from 'react';
//import { Context } from '../Contexts/formContext';
import { template } from '../formDatatemplate';
import { FormContext } from '../Contexts/FormContext';
function AddressInput() {
  const { data, updateData } = useContext(FormContext); // Access context data and update function

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];
  const provinces = [
    "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"
  ];

  const handleCountryChange = (e) => {
    updateData({ 
      country: e.target.value,
      state: "",
     });
  };
  const handleStateChange = (e) => {
    updateData({ state: e.target.value });
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select value={data.country} onChange={handleCountryChange}>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridProvince">
          <Form.Label>State/Province</Form.Label>
          <Form.Select defaultValue="State/Province" value={data.state} onChange={handleStateChange}>
            {(data.country === "US" ? states : provinces).map((option) => (<option key={option} value={option}>{option}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">

<Form.Group as={Col} controlId="formGridCity">
  <Form.Label>City</Form.Label>
  <Form.Control type="city" placeholder="San Diego"/>
</Form.Group>

<Form.Group as={Col} controlId="formGridZip">
  <Form.Label>Zip</Form.Label>
  <Form.Control />
</Form.Group>
</Row>
    </>
  );
}

export default AddressInput;