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
import Places from './Places';
function AddLocationForm() {
  //const { data, updateData } = useContext(FormContext); // Access context
  const [findBy, setfindBy] = useState("address");
  const [place, setPlace] = useState({geometry: {coordinates:[0,0]}});

  const TabComponents = () => {
      return (
        <>
      <Places setPlace = {ting}/>
      <CoordinatesInput place = {place.geometry.coordinates} setPlace={ting2}/>
      
      </>
  )
  };
  function ting(x) {
    setPlace(x);
    console.log("tingy", x);
  }
  function ting2(x) {
    setPlace(x);
    console.log("tingy2", x);
  }
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

        <TabComponents />
      </Form>
    </div>
  );
}

export default AddLocationForm;