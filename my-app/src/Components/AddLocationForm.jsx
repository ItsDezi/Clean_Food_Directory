/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useContext } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {useForm} from "react-hook-form";
import classNames from "classnames";
import InputField from './InputField';
import '../styles/FormTest.css';
import { FormControl, Tab, Tabs, Form } from 'react-bootstrap';
import CoordinatesInput from './CoordinatesInput';
import AddressInput from './AddressInput';
import { template } from '../formDatatemplate';
import { FormContext } from '../Contexts/FormContext';
function AddLocationForm() {
  const { data, updateData } = useContext(FormContext); // Access context
  const [findBy, setfindBy] = useState("address");

  const TabComponents = () => {
    if (findBy === "coordinates") {
      return <CoordinatesInput />;
    } else {
      return <AddressInput />;
    }
  };

  return (
    <div className="container form-container mt-2">
      <Form className="add-location-form">
        <Form.Group>
          <Form.Label>Location name</Form.Label>
          <Form.Control type="text" placeholder="Marthas fresh eggs" />
          <Form.Text className="text-muted">
            If it has no formal name, just add what they have and where it is.
            (i.e. Eggs in Boston)
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Tabs
            id="findBy"
            activeKey={findBy}
            onSelect={(k) => setfindBy(k)}
            className="mb-3"
          >
            <Tab eventKey="address" title="Address"></Tab>
            <Tab eventKey="coordinates" title="Coordinates"></Tab>
          </Tabs>
        </Form.Group>
        <TabComponents />
      </Form>
    </div>
  );
}

export default AddLocationForm;