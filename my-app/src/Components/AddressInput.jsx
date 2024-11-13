import { FormControl, Tab, Tabs, Form, Row, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
function AddressInput() {
    const [country, setCountry] = useState("US");
    const [province, setProvince] = useState();
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
    
    //   useEffect(() => {
    //     console.log("BRUH", country);
    //   }, [country])

return(
<>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Country</Form.Label>
      <Form.Select defaultValue="US" onChange={(e) => setCountry(e.target.value)}>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State/Province</Form.Label>
      <Form.Select defaultValue="State/Province" onChange={(e) => setProvince({province: e.target.value})}>
        {country == "US" ? states.map(state => <option value={state}>{state}</option>) : provinces.map(province => <option value={province}>{province}</option>)}
      </Form.Select>
    </Form.Group>

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